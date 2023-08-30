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
        # for ii in range(1000):
        for ii in range(3):
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
                case {'label':'Saludo'}:
                    saludo = feature.get('value', '')

        return area_total, area_roof, bath, parking, bed, antiquity

    def get_property_proyecto(self, response):
        pattern = re.compile(r'const avisoInfo = (\{.*?\});', re.DOTALL)
        match = pattern.search(response.body.decode("utf-8"))
        json_string = match.group(1).split('const dataLayerInfo =')[0].replace("'", '"')
        last_comma_index = json_string.rfind(',')
        json_string = json_string[:last_comma_index] + json_string[last_comma_index + 1:]
        json_data = json.loads(json_string)

        print(json_data['idAviso'])


    def get_property_clasificado(self, response):
        pattern = re.compile(r'const POSTING = (\{.*?\});', re.DOTALL)
        match = pattern.search(response.body.decode("utf-8"))
        json_string = match.group(1).split('const SITEINFO =')[0]
        json_data = json.loads(json_string)

        Items = UrbaniaClasificadoItem()

        Items['title'] = json_data['titleH1']
        prices = json_data['priceOperationTypes']
        if prices:
            Items['price_S'] = prices[0]['prices'][0]['amount']
            Items['price_USD'] = prices[0]['prices'][1]['amount']

        address = json_data['postingLocation']
        Items['address'] = address['address']['name'] + ', ' + address['location']['name'] \
                            + address['location']['parent']['name'] \
                            + address['location']['parent']['parent']['name']
        Items['property_type'] = json_data['generatedTitle'].split('·')[0]
        Items['image_urls'] = [x['resizeUrl1200x1200'] for x in json_data['pictures']]
        Items['description'] = json_data['description']
        
        Items['area_total'], Items['area_roof'], Items['bath'], Items['parking'], Items['bed'], Items['antiquity'] = self.get_mainFeatures(json_data['mainFeatures'])
        
        general_features = json_data['generalFeatures']
        Items['general_features'], Items['services'], Items['ambience'] = [''] * 3
        for key, value in general_features.items():
            if key == 'Características generales':
                Items['general_features'] = [kk['label'] for kk in value.values()]
            elif key == 'Servicios':
                Items['services'] = [kk['label'] for kk in value.values()]
            elif key == 'Ambientes':
                Items['ambience'] = [kk['label'] for kk in value.values()]
        
        Items['property_url'] = response.url

        yield Items

    def parse(self, response):
        estate_url = response.xpath('//div[@class="sc-i1odl-3 kHALbX"]//a/@href').getall()

        for url in estate_url:
            follow_url = self.base_url + url
            request_curl = property_curl.format(follow_url)
            if 'clasificado' in url:
                continue
                # yield scrapy.Request.from_curl(request_curl, callback=self.get_property_clasificado)
            elif 'proyecto' in url:
                yield scrapy.Request.from_curl(request_curl, callback=self.get_property_proyecto)
            else:
                print('\n\n\n\n')
                print(follow_url)
                print('\n\n')
