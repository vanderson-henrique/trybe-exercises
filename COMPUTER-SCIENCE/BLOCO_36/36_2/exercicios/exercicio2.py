# Defina uma classe Estatistica que calcule média, mediana e moda de uma lista
# de números.

import statistics


class Estatistica:
    @classmethod
    def media(cls, list_numbers):
        sum_numbers = sum(list_numbers)
        size_list = len(list_numbers)
        return sum_numbers / size_list

    @classmethod
    def mediana(cls, list_numbers):
        return statistics.median(list_numbers)

    @classmethod
    def moda(cls, list_numbers):
        return statistics.mode(list_numbers)


LIST_NUMBERS = [1, 25, 45, 44, 78, 1, 1, 100, 2, 7, 100, 99, 5]
print(Estatistica().media(LIST_NUMBERS))
print(Estatistica().mediana(LIST_NUMBERS))
print(Estatistica().moda(LIST_NUMBERS))
