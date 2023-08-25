# Scraping for adondevivir.com

import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


url = "https://www.adondevivir.com/casas-o-departamentos-en-venta"


driver = webdriver.Edge()

driver.get(url + '.html')

# Encuentra todos los elementos <h2> con la clase "sc-i1odl-10 ePgoSB"
h2_elements = driver.find_elements(By.CSS_SELECTOR, 'h2.sc-i1odl-10.ePgoSB')

# Extrae el texto de cada elemento y guárdalo en una lista
h2_text_list = [element.find_element(By.TAG_NAME, "a").get_attribute(
    "href") for element in h2_elements]

driver.get(url + '-pagina-2.html')

wait = WebDriverWait(driver, 10)
checkbox = wait.until(EC.visibility_of_element_located(
    (By.XPATH, '/html/body/table/tbody/tr/td/div/div[1]/table/tbody/tr/td[1]/div[1]/div/label/input')))

time.sleep(1)

checkbox = driver.find_element(
    By.XPATH, '/html/body/table/tbody/tr/td/div/div[1]/table/tbody/tr/td[1]/div[1]/div/label/input')
if not checkbox.is_selected():
    checkbox.click()
h2_elements_2 = driver.find_elements(By.CSS_SELECTOR, 'h2.sc-i1odl-10.ePgoSB')
h2_text_list_2 = [element.find_element(By.TAG_NAME, "a").get_attribute(
    "href") for element in h2_elements_2]

print(h2_text_list+h2_text_list_2)

driver.close()
