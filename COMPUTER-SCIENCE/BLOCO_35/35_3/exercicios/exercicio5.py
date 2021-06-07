# Exercício 5 Modifique o exercício anterior para retornar também quantos
# livros estão disponíveis apresentando como último campo no retorno.

import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

response = requests.get(url)
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()

price = selector.css(".product_main .price_color::text").re_first(
    r"£\d+\.\d{2}"
)

description = selector.css("#product_description ~p::text").get()
sufix = "...more"
if description.endswith(sufix):
    description = description[: -len(sufix)]

url_image = selector.css(".item img::attr(src)").get()

availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, url_image, availability)
