# Trovit Items

import scrapy


class TrovitItem(scrapy.Item):
    title = scrapy.Field()
    price = scrapy.Field()
    property_type = scrapy.Field()
    year = scrapy.Field()
    description = scrapy.Field()
    rooms = scrapy.Field()
    baths = scrapy.Field()
    area = scrapy.Field()
    facilities = scrapy.Field()
    location = scrapy.Field()
    location_address = scrapy.Field()
    nearby_locations = scrapy.Field()
    property_url = scrapy.Field()
