# Crie um algoritmo não recursivo para contar quantos números pares existem em
# uma sequência numérica (1 a n).

def count_even_numbers(n):
    count = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            count += 1
    return count


print(count_even_numbers(10))
