import sys
import psycopg2
from .items import MitulaAdformItem, MitulaDetalleItem

class MitulaAdformPipeline:
    pass

    # def __init__(self, hostname, username, password, port, database):
    #     self.hostname = hostname
    #     self.username = username
    #     self.password = password
    #     self.port = port
    #     self.database = database
    #     if not self.hostname: sys.exit("You need to provide a Connection String.")

    # @classmethod
    # def from_crawler(cls, crawler):
    #     return cls(
    #         hostname = crawler.settings.get('HOSTNAME'),
    #         username = crawler.settings.get('USERNAME'),
    #         password = crawler.settings.get('PASSWORD'),
    #         port = crawler.settings.get('PORT'),
    #         database = crawler.settings.get('DATABASE')
    #     )
    
    # def open_spider(self, spider):
    #     self.connection = psycopg2.connect(
    #         host=self.hostname, user=self.username, 
    #         password=self.password, dbname=self.database, 
    #         port=self.port
    #     )
        
    #     ## Create cursor, used to execute commands
    #     self.cur = self.connection.cursor()
        
    #     ## Create tables if none exist
    #     self.cur.execute('''DROP TABLE IF EXISTS mitula_adform''')
    #     self.cur.execute("""
    #     CREATE TABLE IF NOT EXISTS mitula_adform(
    #         id serial PRIMARY KEY, 
    #         title TEXT, price VARCHAR(15), location VARCHAR(500),
    #         property_type VARCHAR(80), operation_type VARCHAR(80),
    #         plot_area VARCHAR(15), year VARCHAR(10), description TEXT,
    #         image_urls TEXT, bed VARCHAR(40), bath VARCHAR(40),
    #         area VARCHAR(15), facilities TEXT, location_address VARCHAR(500),
    #         nearby_locations TEXT, property_url TEXT
    #     )
    #     """)

    #     self.cur.execute('''DROP TABLE IF EXISTS mitula_detalle''')
    #     self.cur.execute("""
    #     CREATE TABLE IF NOT EXISTS mitula_detalle(
    #         id serial PRIMARY KEY,
    #         doomos_url TEXT,
    #         mitula_url TEXT
    #     )
    #     """)

    # def close_spider(self, spider):
    #     self.cur.close()
    #     self.connection.close()

    # def process_item(self, item, spider):
    #     if isinstance(item, MitulaAdformItem):
    #         self.cur.execute('''
    #         INSERT INTO mitula_adform (title, price, location, property_type, operation_type,
    #                         plot_area, year, description, image_urls, bed,
    #                         bath, area, facilities, location_address, nearby_locations, property_url) 
    #         VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    #         ''', (
    #             item["title"], item["price"], item["location"], item["property_type"], item["operation_type"],
    #             item["plot_area"], item["year"], item["description"], item["image_urls"], item["bed"],
    #             item["bath"], item["area"], item["facilities"], item["location_address"], item["nearby_locations"], item['property_url']
    #         ))

    #     if isinstance(item, MitulaDetalleItem):
    #         self.cur.execute('''
    #         INSERT INTO mitula_detalle (doomos_url, mitula_url) 
    #         VALUES (%s, %s) 
    #         ''',(
    #             item["doomos_url"], item["mitula_url"]
    #         ))

    #     ## Execute insert of data into database
    #     self.connection.commit()
    #     return item