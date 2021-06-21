# Exercício 6: Dada uma string, construa um dicionário com a contagem de cada
# carácter da palavra. Utilize o pseudocódigo e o exemplo abaixo para se 
# nortear.

# Para cada char na string:
#     - Se o char não estiver no dicionário, inclua com o valor 1;

#     - Se estiver, incremente o valor.


# # Exemplo:

# str = "bbbbaaaacccaaaaaaddddddddccccccc"
# # saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

# str = "coxinha"
# # saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# # Explicação: Nenhuma letra repete em coxinha :)

def count_letter(string):
    letters = dict()
    for letter in string:
        if letter not in letters:
            letters[letter] = 1
        else:
            letters[letter] = letters[letter] + 1
    return letters


string = "bbbbaaaacccaaaaaaddddddddccccccc"
string2 = 'coxinha'
print(count_letter(string2))
