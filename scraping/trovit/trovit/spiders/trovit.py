# Trovit Spider

import scrapy
import time

from trovit.items import TrovitItem


def clean_amenities(amenities):
    cleaned_amenities = {}
    for i, amenity in enumerate(amenities):
        if i % 2 == 0:
            cleaned_amenities[amenity.strip()] = amenities[i+1].strip()

    return cleaned_amenities


class TrovitSpider(scrapy.Spider):
    name = "trovit"
    start_urls = ["https://casas.trovit.com.pe/"]

    def save_items(self, response):
        item = TrovitItem()
        item['title'] = response.xpath('//h1/text()').get().strip()
        item['price'] = response.xpath(
            '//*[@id="main_info"]/div[2]/div/div[1]/span/text()').get().strip()
        item['description'] = response.xpath(
            '//*[@id="description"]/p/text()').get().strip()

        amenities = clean_amenities(response.xpath(
            '//*[@id="amenities"]/ul/li/div/text()').getall())

        property_type = amenities.get('Tipo de propiedad', None)
        if not property_type:
            property_type = response.meta['house_type']
        item['property_type'] = property_type

        rooms = amenities.get('Habitaciones', None)
        if not rooms:
            rooms = response.xpath(
                '//*[@id="main_info"]/div[1]/div[1]/div[2]/div/text()').get().strip()
        item['rooms'] = rooms

        baths = amenities.get('Baños', None)
        if not baths:
            baths = response.xpath(
                '//*[@id="main_info"]/div[1]/div[2]/div[2]/div/text()').get().strip()
        item['baths'] = baths

        area = amenities.get('Superficie', None)
        if not area:
            area = response.xpath(
                '//*[@id="amenities"]/ul/li[5]/div[2]/text()').get().strip()
        item['area'] = area

        item['year'] = amenities.get('Año de construcción', None)
        item['facilities'] = response.xpath(
            '//*[@id="property_facilities"]/ul/li/text()').getall()
        item['location'] = response.xpath(
            '//*[@id="main_info"]/h2/text()').get().strip()
        item['location_address'] = response.xpath(
            '//*[@id="map_section_container"]/div[1]/p/text()').get().strip()
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
        for link in links[::-1]:
            yield response.follow(link, callback=self.parse_ubications)
