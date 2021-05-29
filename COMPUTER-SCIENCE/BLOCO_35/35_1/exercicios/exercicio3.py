# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def asterisk_square(number):
    if number < 1:
        return print('Escolha um número maior que 0')
    for num_column in range(1, number + 1):
        asterisk = ''
        for num_line in range(1, number + 1):
            asterisk += '*'
        print(asterisk)


asterisk_square(5)
