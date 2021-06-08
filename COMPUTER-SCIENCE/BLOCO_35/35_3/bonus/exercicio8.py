# Exercício 8 Agora um desafio, vá ao site
# https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as
# imagens de todas as bandeiras

import requests
from parsel import Selector

url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(url)
selector = Selector(text=response.text)

flags_url = selector.css(".gallerybox .image img::attr(src)").getall()

for url in flags_url:
    filename = url.split("/")[-1]
    image_content = requests.get(url).content
    with open(filename, "wb") as file:
        file.write(image_content)
