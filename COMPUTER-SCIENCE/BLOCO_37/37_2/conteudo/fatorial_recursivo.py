def factorial_recursive(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1

    else:
        # chamada de si mesma com um novo valor
        return n * factorial_recursive(n - 1)


print(factorial_recursive(5))
