# Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do num
# Ex: 3 -> [1, 2, "Fizz"].

def fizzbuzz(number):
    listNumber = []
    for n in range(1, number + 1):
        if (n % 3 == 0) and (n % 5 == 0):
            listNumber.append('FizzBuzz')
        elif (n % 3 == 0):
            listNumber.append('Fizz')
        elif (n % 5 == 0):
            listNumber.append('Buzz')
        else:
            listNumber.append(n)
    return listNumber
