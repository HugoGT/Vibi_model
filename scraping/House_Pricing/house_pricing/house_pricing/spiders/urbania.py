import scrapy
from house_pricing.curl import urbania_curl, property_curl
import re, json
from house_pricing.items import UrbaniaClasificadoItem

class UrbaniaSpider(scrapy.Spider):
    name = "urbania"
    base_url = 'https://urbania.pe'

    custom_settings = {
        # this parameter determine the number of requests in parallel
        # because scrapy is a framework asynchronous
        'CONCURRENT_REQUESTS': 24,

        # restart the process once we ride the spider again
        'DUPEFILTER_CLASS': 'scrapy.dupefilters.BaseDupeFilter',

        # encoding
        'FEED_EXPORT_ENCODING': 'utf-8',
    }

    def start_requests(self):
        for ii in range(1000):
            yield scrapy.Request.from_curl(urbania_curl.format(ii + 1), callback=self.parse)

    def get_mainFeatures(self, data):
        area_total, area_roof, bath, parking, bed, antiquity = [''] * 6
        for feature in data.values():
            match feature:
                case {'label':'Total'}:
                    area_total = feature['value'] + feature['measure']
                case {'label':'Techada'}:
                    area_roof = feature['value'] + feature['measure']
                case {'label':'Baños'}:
                    bath = feature['value']
                case {'label':'Estacionamientos'}:
                    parking = feature['value']
                case {'label':'Dormitorios'}:
                    bed = feature['value']
                case {'label':'Antigüedad'}:
                    antiquity = feature['value']

        return area_total, area_roof, bath, parking, bed, antiquity
    
    def get_prices(self, data):
        price_S, price_USD = '', ''
        for price in data:
            match price:
                case {'currency': 'S/'}:
                    price_S = price.get('currency', '') + str(price.get('amount', ''))
                case {'currency': 'USD'}:
                    price_USD = price.get('currency', '') + str(price.get('amount', ''))
        
        return price_S, price_USD
    
    def get_generalFeatures(self, data):
        general_features, services, ambience = [''] * 3
        for key, value in data.items():
            if key == 'Características generales':
                general_features = [kk['label'] for kk in value.values()]
            elif key == 'Servicios':
                services = [kk['label'] for kk in value.values()]
            elif key == 'Ambientes':
                ambience = [kk['label'] for kk in value.values()]

        return general_features, services, ambience

    def get_property_proyecto(self, response):
        pattern = re.compile(r'const POSTING = (\{.*?\});', re.DOTALL)
        match = pattern.search(response.body.decode("utf-8"))
        json_string = match.group(1).split('const SITEINFO =')[0]
        json_data = json.loads(json_string)

        Items = UrbaniaClasificadoItem()

        title = json_data['titleH1']
        address = json_data['postingLocation']
        image_urls = [x['resizeUrl1200x1200'] for x in json_data['pictures']]
        description = json_data['description']
        general_features = json_data['generalFeatures']

        for iitem in json_data['units']:
            Items['title'] = title
            prices = iitem['priceOperationTypes'][0]['prices']
            Items['price_S'], Items['price_USD'] = '', ''
            if prices:
                Items['price_S'], Items['price_USD'] = self.get_prices(prices)
            Items['address'] = address['address']['name'] + ', ' + address['location']['name'] \
                                + address['location']['parent']['name'] + ', ' \
                                + address['location']['parent']['parent']['name']
            
            Items['property_type'] = iitem['generatedTitle'].split('·')[0]
            Items['image_urls'] = image_urls
            Items['description'] = description

            Items['area_total'], Items['area_roof'], Items['bath'], Items['parking'], Items['bed'], Items['antiquity'] = self.get_mainFeatures(iitem['mainFeatures'])

            Items['general_features'], Items['services'], Items['ambience'] = self.get_generalFeatures(general_features)
            
            Items['property_url'] = response.url

            yield Items

    def get_property_clasificado(self, response):
        pattern = re.compile(r'const POSTING = (\{.*?\});', re.DOTALL)
        match = pattern.search(response.body.decode("utf-8"))
        json_string = match.group(1).split('const SITEINFO =')[0]
        json_data = json.loads(json_string)

        Items = UrbaniaClasificadoItem()

        Items['title'] = json_data['titleH1']
        Items['price_S'], Items['price_USD'] = self.get_prices(json_data['priceOperationTypes'][0]['prices'])

        address = json_data['postingLocation']
        Items['address'] = address['address']['name'] + ', ' + address['location']['name'] \
                            + address['location']['parent']['name'] + ', ' \
                            + address['location']['parent']['parent']['name']
        Items['property_type'] = json_data['generatedTitle'].split('·')[0]
        Items['image_urls'] = [x['resizeUrl1200x1200'] for x in json_data['pictures']]
        Items['description'] = json_data['description']
        
        Items['area_total'], Items['area_roof'], Items['bath'], Items['parking'], Items['bed'], Items['antiquity'] = self.get_mainFeatures(json_data['mainFeatures'])
        
        Items['general_features'], Items['services'], Items['ambience'] = self.get_generalFeatures(json_data['generalFeatures'])
        
        Items['property_url'] = response.url

        yield Items

    def parse(self, response):
        estate_url = response.xpath('//div[@class="sc-i1odl-3 kHALbX"]//a/@href').getall()

        for url in estate_url:
            follow_url = self.base_url + url
            request_curl = property_curl.format(follow_url)
            if 'clasificado' in url:
                yield scrapy.Request.from_curl(request_curl, callback=self.get_property_clasificado)
            elif 'proyecto' in url:
                yield scrapy.Request.from_curl(request_curl, callback=self.get_property_proyecto)
            else:
                with open('leaking_urls.txt', 'w') as file:
                    file.write(follow_url)
