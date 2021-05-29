# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical.

def print_on_vertical():
    name = input('Digite o seu nome:')
    for letter in name:
        print(letter)


print_on_vertical()
