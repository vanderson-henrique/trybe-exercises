# Palavra embaralhada onde o a lista é lida de um arquivo externo

import random
import sys

words = []
with open('clubes.txt') as clubes:
    for clube in clubes:
        words.append(clube[:-1])

word = random.choice(words)
scrambled_word = "".join(random.sample(word, len(word)))

print(f'Descubra qual a palavra está embaralhada: {scrambled_word}')

for attemp in range(1, 4):
    user_attempt = input('Qual é a palavra embaralhada: ')
    if user_attempt == word:
        print(f'Você acertou, a palavra embaralhada era: {word}')
        sys.exit()
    elif attemp < 3:
        print('Tente mais uma vez...')
    else:
        print(f'Infelizmente você não acertou. A palavra era {word}')
