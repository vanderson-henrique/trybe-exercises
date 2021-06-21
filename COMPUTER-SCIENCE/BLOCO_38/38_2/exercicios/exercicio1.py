"""
Exercício 1 - Facebook
Você receberá uma lista de palavras e uma string . Escreva uma função que
decida quais palavras podem ser formadas com os caracteres da string
(cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento
das palavras escolhidas.
"""

# words = ["cat", "bt", "hat", "tree"], chars = "atach"

"""
Explicação: As palavras que podem ser formadas com os caracteres da string
são "cat" (tamanho 3) e "hat" (tamanho 3).
"""


def verify_words(words, chars):
    chars_dict = dict()
    words_possibles = []
    for char in chars:
        chars_dict[char] = chars_dict.get(char, 0) + 1

    for word in words:
        str_count = {}
        for letter in word:
            if letter not in chars_dict:
                break
            if letter not in str_count:
                str_count[letter] = str_count.get(letter, 0) + 1
            if str_count[letter] > chars_dict[letter]:
                break
        else:
            words_possibles.append(word)
    return words_possibles


words = ["cat", "bt", "hat", "tree"]
chars = "atach"
print(verify_words(words, chars))
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(verify_words(words, chars))

