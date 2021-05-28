"""Função que retorna fizz se multiplo de 3, buzz se multiplo de 5"""


def fizzbuzz(numero):
    if numero % 3 == 0 and numero % 5 == 0:
        return "fizzbuzz"
    elif numero % 3 == 0:
        return "fizz"
    elif numero % 5 == 0:
        return "buzz"
    else:
        return str(numero)


def fizzbuzz_limit(limit):
    for numero in range(1, limit+1):
        print(fizzbuzz(numero))


fizzbuzz_limit(20)

assert fizzbuzz(3) == "fizz"
assert fizzbuzz(5) == "buzz"
assert fizzbuzz(15) == "fizzbuzz"
assert fizzbuzz(4) == "4"
