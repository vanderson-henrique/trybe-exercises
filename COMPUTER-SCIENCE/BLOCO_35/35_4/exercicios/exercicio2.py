# Exercício 2 Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa
# 69 5683. Claro que existem alguns problemas, uma vez que alguns números de
# telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão
# associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por letras
# maiúsculas (A-Z), hifens (-) e os números 1 e 0.


def discoverNumber(expression):
    characters = [letter for letter in expression]
    number = ''
    for element in characters:
        if element in '-01':
            number += element
        elif element in 'ABC':
            number += '2'
        elif element in 'DEF':
            number += '3'
        elif element in 'GHI':
            number += '4'
        elif element in 'JKL':
            number += '5'
        elif element in 'MNO':
            number += '6'
        elif element in 'PQRS':
            number += '7'
        elif element in 'TUV':
            number += '8'
        elif element in 'WXYZ':
            number += '9'
    return number


discoverNumber("MY-MISERABLE-JOB")
