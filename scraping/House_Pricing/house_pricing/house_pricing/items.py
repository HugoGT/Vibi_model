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

class MitulaDetalleItem(scrapy.Item):
    mitula_url = scrapy.Field()
    doomos_url = scrapy.Field()

class UrbaniaClasificadoItem(scrapy.Item):
    title = scrapy.Field()
    price_S = scrapy.Field()
    price_USD = scrapy.Field()
    address = scrapy.Field()
    property_type = scrapy.Field()
    image_urls = scrapy.Field()
    description = scrapy.Field()
    area_total = scrapy.Field()
    area_roof = scrapy.Field()
    bath = scrapy.Field()
    bed = scrapy.Field()
    parking = scrapy.Field()
    antiquity = scrapy.Field()
    general_features = scrapy.Field()
    services = scrapy.Field()
    ambience = scrapy.Field()
    property_url = scrapy.Field()