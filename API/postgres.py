# DB conection

import os

import psycopg2


def update_DB(data):
    try:
        connection = psycopg2.connect(
            user="postgres",
            password=os.environ.get("SUPABASE_KEY"),
            host="db.kxpjvhtjuycaxzooawiz.supabase.co",
            port="5432",
            database="postgres"
        )

        cursor = connection.cursor()

        insert_query = """INSERT INTO users (credit, name, age, phone, email, dni, dni_date, home_price, currency, initial_payment, situation, department, district, income, estimated_purchase) VALUES (%(credit)s, %(full_name)s, %(age)s, %(phone)s, %(email)s, %(dni)s, %(dni_date)s, %(home_price)s, %(currency)s, %(initial_payment)s, %(situation)s, %(department)s, %(district)s, %(income)s, %(estimated_purchase)s)"""

        cursor.execute(insert_query, data)
        connection.commit()

        cursor.close()
        connection.close()

        return "Registro exitoso"

    except Exception as e:
        return f"Error: {str(e)}"
