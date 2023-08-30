# Trovit Pipelines

import csv

from .items import TrovitItem


class TrovitPipeline:
    def __init__(self):
        self.csv_file = open('data.csv', 'w', newline='', encoding='utf-8')
        self.csv_writer = csv.DictWriter(
            self.csv_file, fieldnames=TrovitItem.fields.keys())
        self.csv_writer.writeheader()

    def process_item(self, item, spider):
        if isinstance(item, TrovitItem):
            self.csv_writer.writerow(item)
        return item

    def close_spider(self, spider):
        self.csv_file.close()
