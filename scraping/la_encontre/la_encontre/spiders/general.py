import scrapy
import pandas as pd


class GeneralSpider(scrapy.Spider):
    name = "general"
    allowed_domains = ["www.laencontre.com.pe"]
    start_urls = ["https://www.laencontre.com.pe/venta/casas"]
    custom_settings = {
        # this parameter determine the number of requests in parallel
        # because scrapy is a framework asynchronous
        'CONCURRENT_REQUESTS': 24,

        # restart the process once we ride the spider again
        'DUPEFILTER_CLASS': 'scrapy.dupefilters.BaseDupeFilter',

        # encoding
        'FEED_EXPORT_ENCODING': 'utf-8',
        
        #save in json
        'FEED_URI': 'casas_la_encontre.csv',
        'FEED_FORMAT': 'csv'
    }
    

    def parse(self, response):
        # Extraer todos los enlaces de la página inicial
        enlaces = response.css('a::attr(href)').extract()
        for enlace in enlaces:
            # Comprobar si el enlace es válido para la categoría "venta/casas"
            if enlace.startswith('/venta/casas/'):
                # Construir la URL completa
                url_enlace = response.urljoin(enlace)
                # Seguir el enlace y usar la función de devolución de llamada "parse_pagina_casas"
                yield scrapy.Request(url_enlace, callback=self.parse_pagina_departamento)

    def parse_pagina_departamento(self, response):
        # Extraer el dato
        departamento = response.css('h1.titular::text').extract_first()
        
        # Luego, puedes seguir otro enlace dentro de esta página (si existe)
        otros_enlaces = response.xpath('//h2/a[@class="listLink"]/@href').getall()
        for otro_enlace in otros_enlaces:
            # Construir la URL completa para cada enlace secundario
            url_otro_enlace = response.urljoin(otro_enlace)
            # Seguir el enlace y usar la función de devolución de llamada "parse_pagina_general_casas"
            yield scrapy.Request(url_otro_enlace, callback=self.parse_pagina_general_casas, cb_kwargs={'departamento': departamento})


    def parse_pagina_general_casas(self, response, **kwargs):
        if kwargs:
            departamento = kwargs['departamento']
        # Iterar sobre todos los enlaces encontrados en esta página secundaria
        enlaces_secundarios = response.css('a::attr(href)').extract()
        for enlace_secundario in enlaces_secundarios:
            # Comprobar si el enlace es válido (puedes ajustar esto según tus necesidades)
            if enlace_secundario.startswith('/inmueble/'):
                # Construir la URL completa para el enlace secundario
                url_enlace_secundario = response.urljoin(enlace_secundario)
                # Seguir el enlace y usar la función de devolución de llamada "parse_pagina_secundaria"
                yield scrapy.Request(url_enlace_secundario, callback=self.parse_pagina_cada_casa, cb_kwargs = {'departamento':departamento})
    
    def parse_pagina_cada_casa(self, response, **kwargs):
        if kwargs:
            departamento = kwargs['departamento']
            
         # Extraer los datos de cada casa
        titulo = response.css('h1::text').extract()
        precio = response.css('h2::text').re(r'\$\s*([\d,]+)')
        ubicacion = response.css('span.location_info::text').extract_first()
        m2 = response.xpath('//li[@class="dimensions"]/text()').get()
        habitaciones = response.xpath('//li[@class="bedrooms"]/text()').get()
        banios = response.xpath('//li[@class="bathrooms"]/text()').get()
        descripcion_1 = response.xpath('//p[@class="description long_text"]/text()').getall()
        descripcion_2 = response.xpath('//span[@class="more_text"]/text()').getall()
        c_interiores = response.xpath('//ul[@class="list"]/li/text()').getall()
        c_exteriores = response.xpath('//ul[@class="list col-md2"]/li/text()').getall()
        entorno = response.xpath('//ul[@class="list col-md3"]/li/text()').getall()
        
        yield {"titulo": titulo, 
                "departamento": departamento,
                "precio": precio,     
                "ubicacion": ubicacion,
                "m2" : m2,
                "habitaciones" : habitaciones, 
                "banios" : banios,  
                "descripcion_1": descripcion_1, 
                "descripcion_2": descripcion_2,
                "c_interiores": c_interiores, 
                "c_exteriores": c_exteriores, 
                "entorno":entorno}