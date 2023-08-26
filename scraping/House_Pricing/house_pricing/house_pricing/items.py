import scrapy


class MitulaAdformItem(scrapy.Item):
    title = scrapy.Field()
    price = scrapy.Field()
    location = scrapy.Field()
    property_type = scrapy.Field()
    operation_type = scrapy.Field()
    plot_area = scrapy.Field()
    year = scrapy.Field()
    description = scrapy.Field()
    image_urls = scrapy.Field()
    bed = scrapy.Field()
    bath = scrapy.Field()
    area = scrapy.Field()
    facilities = scrapy.Field()
    location_address = scrapy.Field()
    nearby_locations = scrapy.Field()
    property_url = scrapy.Field()