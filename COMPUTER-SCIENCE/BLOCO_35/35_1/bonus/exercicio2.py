# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.

def asterisk_triangle(number):
    for num_line in range(1, number + 1):
        count = number - num_line
        asterisk = ''
        space = ''
        for num_column in range(1, number + 1):
            if count < num_column:
                asterisk += '*'
            else:
                space += ' '
        print(asterisk + space)


asterisk_triangle(8)
