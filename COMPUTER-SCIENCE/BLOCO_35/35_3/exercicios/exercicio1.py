# Exercício 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8 e
# exiba seu conteúdo de forma legível.
import requests

url = 'https://httpbin.org/encoding/utf8'

response = requests.get(url)
print(response.text)
