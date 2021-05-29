# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def higher_number(a, b):
    if a > b:
        return a
    return b


assert higher_number(1, 2) == 2
assert higher_number(2, 1) == 2
assert higher_number(2, 2) == 2
