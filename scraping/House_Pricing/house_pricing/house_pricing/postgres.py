#############################
#######    CREATE    ########

mitula_adform = """
                CREATE TABLE IF NOT EXISTS mitula_adform(
                    id serial PRIMARY KEY, 
                    title TEXT,
                    price VARCHAR(15),
                    location VARCHAR(500),
                    property_type VARCHAR(80),
                    operation_type VARCHAR(80),
                    plot_area VARCHAR(15),
                    year VARCHAR(10),
                    description TEXT,
                    image_urls TEXT,
                    bed VARCHAR(40),
                    bath VARCHAR(40),
                    area VARCHAR(15),
                    facilities TEXT,
                    location_address VARCHAR(500),
                    nearby_locations TEXT,
                    property_url TEXT
                )
                """

mitula_detalle = """CREATE TABLE IF NOT EXISTS mitula_detalle(
                        id serial PRIMARY KEY,
                        doomos_url TEXT,
                        mitula_url TEXT
                    )"""

urbania_estates = """CREATE TABLE IF NOT EXISTS urbania_estates(
                    id serial PRIMARY KEY, 
                    title TEXT,
                    price_S VARCHAR(20),
                    price_USD VARCHAR(20),
                    address TEXT,
                    property_type VARCHAR(50),
                    image_urls TEXT,
                    description TEXT,
                    area_total VARCHAR(10),
                    area_roof VARCHAR(10),
                    bath VARCHAR(10),
                    bed VARCHAR(10),
                    parking VARCHAR(30),
                    antiquity VARCHAR(20),
                    general_features TEXT,
                    services TEXT,
                    ambience TEXT,
                    property_url TEXT
                )"""

#############################
#######    INSERT    ########

mitula_adform_insert = '''
                        INSERT INTO mitula_adform (title, price, location, property_type, operation_type,
                                        plot_area, year, description, image_urls, bed,
                                        bath, area, facilities, location_address, nearby_locations, property_url) 
                        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
                        '''

mitula_detalle_insert = '''
                        INSERT INTO mitula_detalle (doomos_url, mitula_url) 
                        VALUES (%s, %s) 
                        '''

urbania_estates_insert = '''
                         INSERT INTO urbania_estates (title, price_S, price_USD, address, property_type,
                                            image_urls, description, area_total, area_roof, bath,
                                            bed, parking, antiquity, general_features, services,
                                            ambience, property_url)
                         VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)                    
                        '''