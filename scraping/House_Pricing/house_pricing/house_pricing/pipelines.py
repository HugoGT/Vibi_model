import sys
import psycopg2
from .items import MitulaAdformItem, MitulaDetalleItem, UrbaniaClasificadoItem
from .postgres import mitula_adform, mitula_detalle, urbania_estates
from .postgres import mitula_adform_insert, mitula_detalle_insert, urbania_estates_insert

class MitulaAdformPipeline:

    def __init__(self, hostname, username, password, port, database):
        self.hostname = hostname
        self.username = username
        self.password = password
        self.port = port
        self.database = database
        if not self.hostname: sys.exit("You need to provide a Connection String.")

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            hostname = crawler.settings.get('HOSTNAME'),
            username = crawler.settings.get('USERNAME'),
            password = crawler.settings.get('PASSWORD'),
            port = crawler.settings.get('PORT'),
            database = crawler.settings.get('DATABASE')
        )
    
    def open_spider(self, spider):
        self.connection = psycopg2.connect(
            host=self.hostname, user=self.username, 
            password=self.password, dbname=self.database, 
            port=self.port
        )
        
        ## Create cursor, used to execute commands
        self.cur = self.connection.cursor()
        
        ## Create tables if none exist
        if self.database == 'mitula_db':
            self.cur.execute('''DROP TABLE IF EXISTS mitula_adform''')
            self.cur.execute(mitula_adform)

            self.cur.execute('''DROP TABLE IF EXISTS mitula_detalle''')
            self.cur.execute(mitula_detalle)

        elif self.database == 'urbania_db':
            self.cur.execute('''DROP TABLE IF EXISTS urbania_estates''')
            self.cur.execute(urbania_estates)

    def close_spider(self, spider):
        self.cur.close()
        self.connection.close()

    def process_item(self, item, spider):
        if isinstance(item, UrbaniaClasificadoItem):
            self.cur.execute(urbania_estates_insert, (
                item['title'], item['price_S'], item['price_USD'], item['address'], item['property_type'],
                item['image_urls'], item['description'], item['area_total'], item['area_roof'], item['bath'],
                item['bed'], item['parking'], item['antiquity'], item['general_features'], item['services'],
                item['ambience'], item['property_url']
            ))

        elif isinstance(item, MitulaAdformItem):
            self.cur.execute(mitula_adform_insert, (
                item["title"], item["price"], item["location"], item["property_type"], item["operation_type"],
                item["plot_area"], item["year"], item["description"], item["image_urls"], item["bed"],
                item["bath"], item["area"], item["facilities"], item["location_address"], item["nearby_locations"], item['property_url']
            ))

        elif isinstance(item, MitulaDetalleItem):
            self.cur.execute(mitula_detalle_insert,(
                item["doomos_url"], item["mitula_url"]
            ))

        ## Execute insert of data into database
        self.connection.commit()
        return item