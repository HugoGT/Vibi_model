# Trovit Spider

import scrapy

from trovit.items import TrovitItem


class TrovitSpider(scrapy.Spider):
    name = "trovit"
    start_urls = ["https://casas.trovit.com.pe/"]

    def save_items(self, response):
        item = TrovitItem()
        item['title'] = response.xpath('//h1/text()').get()
        item['price'] = response.xpath(
            '//*[@id="main_info"]/div[2]/div/div[1]/span/text()').get()
        item['year'] = response.xpath(
            '//*[@id="amenities"]/ul/li[6]/div[2]/text()').get()
        item['description'] = response.xpath(
            '//*[@id="description"]/p/text()').get()

        property_type = response.xpath(
            '//*[@id="amenities"]/ul/li[2]/div[2]/text()').get()
        if not property_type:
            property_type = response.meta['house_type']
        item['property_type'] = property_type

        rooms = response.xpath(
            '//*[@id="amenities"]/ul/li[3]/div[2]/text()').get()
        if not rooms:
            rooms = response.xpath(
                '//*[@id="main_info"]/div[1]/div[1]/div[2]/div/text()').get()
        item['rooms'] = rooms

        baths = response.xpath(
            '//*[@id="amenities"]/ul/li[4]/div[2]/text()').get()
        if not baths:
            baths = response.xpath(
                '//*[@id="main_info"]/div[1]/div[2]/div[2]/div/text()').get()
        item['baths'] = baths

        area = response.xpath(
            '//*[@id="main_info"]/div[1]/div[3]/div[2]/div/text()').get()
        if not area:
            area = response.xpath(
                '//*[@id="amenities"]/ul/li[5]/div[2]/text()').get()
        item['area'] = area

        item['facilities'] = response.xpath(
            '//*[@id="property_facilities"]/ul/li/text()').getall()
        item['location'] = response.xpath(
            '//*[@id="main_info"]/h2/text()').get()
        item['location_address'] = response.xpath(
            '//*[@id="map_section_container"]/div[1]/p/text()').get()
        item['nearby_locations'] = response.xpath(
            '//*[@id="map_section_container"]/div[2]/span/text()').getall()
        item['property_url'] = response.url

        yield item

    def parse_items(self, response):
        links = response.xpath(
            '//*[@id="wrapper_listing"]/li/div[1]/div/div[2]/a/@href').getall()
        for link in links:
            yield response.follow(link, callback=self.save_items, meta={'house_type': response.meta['house_type']})

    def parse_ubications(self, response):
        house_type = str(response.url).split('/')[-1]
        links = response.xpath(
            '//*[@id="locations"]/div[2]/div/ul/li/a/@href').getall()

        for link in links:
            yield response.follow(link, callback=self.parse_items, meta={'house_type': house_type})

    def parse(self, response):
        links = response.xpath(
            '//*[@id="locations"]/div[1]/ul[3]/li/a/@href').getall()
        for link in links:
            yield response.follow(link, callback=self.parse_ubications)
