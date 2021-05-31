# Qual é esse pokemon?

import json
import random
import sys

with open('pokemons.json') as pokemons_list:
    pokemons = json.load(pokemons_list)['results']
# Coloco num 'set' para não duplicar os nomes
name_pokemons = set()
for pokemon in pokemons:
    name_pokemons.add(pokemon['name'])
# Transfiro para uma lista para facilitar o manuseio dos dados
list_names = [
    name for name in name_pokemons
]

pokemon_choice = random.choice(list_names)

tip = ''
for index in range(0, len(pokemon_choice)):
    user_choice = input(f'Quem é esse pokemon? {tip}\n')
    if (user_choice == pokemon_choice):
        print(f'Você acertou, o pokemon escolhido era {pokemon_choice}')
        sys.exit()
    else:
        tip += pokemon_choice[index]
