# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida.

name_input = input('Digite seu nome: ')

for letter in name_input:
    print(name_input)
    name_input = name_input[:-1]
