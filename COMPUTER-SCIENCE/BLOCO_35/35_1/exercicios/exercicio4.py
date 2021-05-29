# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres.

def biggest_name(names):
    current_name = ''
    for name in names:
        if len(name) > len(current_name):
            current_name = name
    return current_name


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
