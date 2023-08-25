import scrapy
import json
from scrapy import Request
from house_pricing.curl import home_curl, level1, level2, level3

class RetailSpider(scrapy.Spider):
    name = "mitula_links"

    custom_settings = {
        # this parameter determine the number of requests in parallel
        # because scrapy is a framework asynchronous
        'CONCURRENT_REQUESTS': 24,

        # restart the process once we ride the spider again
        'DUPEFILTER_CLASS': 'scrapy.dupefilters.BaseDupeFilter',

        # encoding
        'FEED_EXPORT_ENCODING': 'utf-8',

        #save in json
        'FEED_URI': 'selling_links.json',
        'FEED_FORMAT': 'json'
    }

    def start_requests(self):
        options = [chr(ascii_value) for ascii_value in range(ord('a'), ord('z') + 1)]
        for letter in options:
            yield Request.from_curl(home_curl.format(letter), callback=self.parse, cb_kwargs={'letter':letter})

    def define_links(self, name1, name2, name3):
        if name1 and name2 and not name3:
            return level2.format(name2, name1, name2)
        elif name3:
            return level3.format(name3, name2, name1, name3)
        return level1.format(name1, name1)

    def get_names(self, data: dict):
        name1 = [x['name1'].replace(' ', '+') for x in data]
        name2 = [x.get('name2', '').replace(' ', '+') for x in data]
        name3 = name3 = [x.get('name3', '').replace(' ', '+') for x in data]
        return name1, name2, name3
    
    def parse(self, response, **kwargs):
        if kwargs:
            letter = kwargs['letter']

        data = json.loads(response.body)['locations']
        name1, name2, name3 = self.get_names(data)
        city_urls = [
            self.define_links(n1, n2, n3) for n1, n2, n3 in zip(name1, name2, name3)
        ]

        yield {
            letter: city_urls
        }
        