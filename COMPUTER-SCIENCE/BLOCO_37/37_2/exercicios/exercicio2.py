# Transforme o algoritmo criado no exercício 1 em recursivo.

def count_even_numbers_recursivo(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even_numbers_recursivo(n-1)
    else:
        return count_even_numbers_recursivo(n-1)


print(count_even_numbers_recursivo(10))
