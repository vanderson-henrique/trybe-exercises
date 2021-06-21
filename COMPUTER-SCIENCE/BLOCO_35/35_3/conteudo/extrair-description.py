from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
# Entra na página principal
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)
# Recupera o endereço para entrar na página de detalher do livro e anexa na URL
href = selector.css(".product_pod h3 a::attr(href)").get()
detail_page_url = URL_BASE + href

# baixa o conteúdo da página de detalhes
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do produto
# ~ significa a tag irmã
description = detail_selector.css("#product_description ~ p::text").get()
print(description)