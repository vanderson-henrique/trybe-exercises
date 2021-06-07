# Exercício 4 Baseados em uma página contendo detalhes sobre um livro
# http://books.toscrape.com/catalogue/the-grand-design_405/index.html , faça a
# extração dos campos título, preço, descrição e url contendo a imagem de capa
# do livro.

import requests
from parsel import Selector

url = 'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'

response = requests.get(url)
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()

price = selector.css(
    ".product_main .price_color::text").re_first(r"£\d+\.\d{2}")

description = selector.css("#product_description ~p::text").get()
sufix = "...more"
if description.endswith(sufix):
    description = description[:-len(sufix)]

url_image = selector.css(".item img::attr(src)").get()

print(title, price, description, url_image)
