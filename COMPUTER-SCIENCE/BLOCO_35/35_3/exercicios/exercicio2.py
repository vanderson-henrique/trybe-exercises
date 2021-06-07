# Exercício 2 Faça uma requisição ao recurso usuários da API do Github
# ( https://api.github.com/users ), exibindo o username e url de todos os
# usuários retornados.

import requests

url = 'https://api.github.com/users'

users = requests.get(url)

for user in users.json():
    # print(f"user['login'] user['url']") - Este é outro jeito de fazer
    print(user["login"], end=" ")
    print(user["html_url"])
