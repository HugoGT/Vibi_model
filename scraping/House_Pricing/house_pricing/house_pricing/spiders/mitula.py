import scrapy
import json

class MitulaSpider(scrapy.Spider):
    name = "mitula"
    start_urls = []
    base_url = 'https://casas.mitula.pe'

    custom_settings = {
        # this parameter determine the number of requests in parallel
        # because scrapy is a framework asynchronous
        'CONCURRENT_REQUESTS': 24,

        # restart the process once we ride the spider again
        'DUPEFILTER_CLASS': 'scrapy.dupefilters.BaseDupeFilter',

        # encoding
        'FEED_EXPORT_ENCODING': 'utf-8',
    }

    def __init__(self):
        with open('selling_links.json', 'r') as f_json:
            data = json.load(f_json)
        
        for item in data:
            self.start_urls += list(item.values())[0]

        self.start_urls = list(set(self.start_urls))[1:3]
        self.start_urls.append('https://casas.mitula.pe/searchRE/nivel2-Lima/nivel1-Lima+Metropolitana/op-1/q-Lima')

    def get_estate_detalle(self, response):
        pass

    def get_estate_adform(self, response):
        title = response.xpath('//div[@class="main-title"]/text()').get()
        price = response.xpath('//div[@class="prices-and-fees__price"]/text()').get().strip()
        location = response.xpath('//div[@class="location"]/text()').get()

        property_type = response.xpath('//div[@class="property-type"]/span[@class]/text()').get()
        operation_type = response.xpath('//div[@class="operation-type"]/span[@class]/text()').get()
        plot_area = response.xpath('//div[@class="plot-area"]/span[@class]/text()').get()
        year = response.xpath('//div[@class="year"]/span[@class]/text()').get()

        description = response.xpath('//div[@id="description-text"]/text()').get()
        image_urls = response.xpath('//img[@alt="place photo 1"]/@src').get()

        inner = response.xpath('//div[@class="details-item"]/div[@class="details-item-value"]/text()').getall()
        if len(inner) == 3:
            bed, bath, area = inner

        facilities = response.xpath('//div[@class="facilities"]//span/text()').getall()
        location_address = response.xpath('//div[@class="location-map__location-address-map"]/text()').get()
        nearby_locations = response.xpath('//div[@class="nearby-locations"]/ul//span/text()').getall()
        
    def parse(self, response, **kwargs):
        if kwargs:
            num_page = kwargs['num_page']
        else:
            num_page = 2

        estates = response.xpath('//div[@id="listings"]//a/@href').getall()
        for url in estates:
            follow_url = self.base_url + url
            if 'adform' in url.split('/'):
                yield response.follow(follow_url, callback=self.get_estate_adform)
            elif 'detalle' in url.split('/'):
                yield response.follow(follow_url, callbaack=self.get_estate_detalle)

        next_page = response.xpath('//li[@value="{}"]/a/@href'.format(num_page)).get()
        if next_page:
            yield response.follow(next_page, callback=self.parse, cb_kwargs={'num_page': num_page + 1})
