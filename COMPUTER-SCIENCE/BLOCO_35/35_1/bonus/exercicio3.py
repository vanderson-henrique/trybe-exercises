# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N.

def summation(number):
    total = 0
    for num in range(1, number + 1):
        total += num
    return total


assert summation(5) == 15
assert summation(10) == 55
assert summation(100) == 5050

print(summation(100))
