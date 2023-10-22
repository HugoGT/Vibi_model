# Validate Data

import re
from datetime import datetime

import phonenumbers


current_date = datetime.now().date()


def validate_data(data):
    credit = data.credit
    home_price = "Sin dato"
    currency = "Sin dato"
    initial_payment = "Sin dato"
    situation = "Sin dato"
    department = "Sin dato"
    district = "Sin dato"
    income = "Sin dato"
    estimated_purchase = "Sin dato"
    errors = []

    if credit == "CM":
        credit = "Crédito Mivivienda"
    elif credit == "TP":
        credit = "Techo Propio"
    elif credit == "CH":
        credit = "Crédito Hipotecario"
    else:
        errors.append("Error en tipo de crédito")

    pattern = r'^[A-Za-z\s]+$'
    if not re.match(pattern, data.full_name):
        errors.append("Error en el nombre")
    name = data.full_name

    try:
        age = int(data.age)
        if age < 18 or age > 100:
            errors.append("Edad no válida")
    except ValueError:
        errors.append("Error en la edad")

    try:
        phone = phonenumbers.parse(data.phone, None)

        if not phonenumbers.is_valid_number(phone):
            errors.append("Número de celular inválido")

        phone = phonenumbers.format_number(
            phone, phonenumbers.PhoneNumberFormat.E164)

    except phonenumbers.NumberParseException:
        errors.append("Error en el número de celular")

    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if not re.match(pattern, data.email):
        errors.append("Error en el email")
    email = data.email

    pattern = r'^\d{8}$'
    if not re.match(pattern, data.dni):
        errors.append("Error en el DNI")
    dni = int(data.dni)

    dni_date = "Sin dato"
    try:
        dni_date = datetime.strptime(data.dni_date, '%Y-%m-%d').date()

        if dni_date > current_date:
            raise ValueError
    except ValueError:
        errors.append("Error en la fecha de emisión")
    dni_date = str(dni_date)

    if data.home_price:
        try:
            home_price = int(data.home_price)
        except ValueError:
            errors.append("Error en el precio de la vivienda")

    if data.currency:
        currency = data.currency.lower()
        if currency not in ["soles", "dólares"]:
            errors.append("Error en la moneda")

    if data.initial_payment:
        try:
            initial_payment = int(data.initial_payment)
        except ValueError:
            errors.append("Error en la cuota inicial")

    if data.situation:
        situation = data.situation.lower()
        if situation not in ["dependiente", "independiente"]:
            errors.append("Error en la situación laboral")

    if data.department != "SELECCIONAR":
        department = data.department
    if data.district != "SELECCIONAR":
        district = data.district

    if data.income:
        try:
            income = int(data.income)
        except ValueError:
            errors.append("Error en el ingreso mensual")

    if data.estimated_purchase:
        estimated_purchase = data.estimated_purchase.lower()
        if estimated_purchase not in ["menos de 3 meses", "de 3 a 6 meses", "de 6 meses a 1 año", "más de 1 año"]:
            errors.append("Error en compra estimada")

    variables = [
        home_price,
        currency,
        initial_payment,
        situation,
        department,
        district,
        income,
        estimated_purchase
    ]

    if data.credit == "CH":
        e = 0
        for v in variables:
            if v == None or v == "Sin dato":
                e += 1
        if e == 1:
            errors.append("Falta 1 campo por llenar")
        elif e > 1:
            errors.append(f"Faltan {e} campos por llenar")

    validated_data = {
        "credit": credit,
        "full_name": name,
        "age": age,
        "phone": phone,
        "email": email,
        "dni": dni,
        "dni_date": dni_date,
        "home_price": home_price,
        "currency": currency,
        "initial_payment": initial_payment,
        "situation": situation,
        "department": department,
        "district": district,
        "income": income,
        "estimated_purchase": estimated_purchase,
        "errors": errors
    }

    return validated_data
