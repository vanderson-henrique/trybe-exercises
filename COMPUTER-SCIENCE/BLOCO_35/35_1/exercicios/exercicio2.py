# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def average(numbers):
    sum_of_numbers = sum(numbers)
    length_of_list = len(numbers)
    avg = sum_of_numbers / length_of_list
    return avg


assert average([1, 2, 3, 4, 5]) == 3
assert average([1, 1, 1, 1]) == 1
assert average([10, 20, 30, 40, 50]) == 30
