from time import perf_counter
from exercicios.exercicio1_bubble_sort import bubble_sort
from exercicios.exercicio2_merge_sort import merge_sort


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name

    def __enter__(self):
        self.start = perf_counter()

    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")


with Cronometro("bubble_sort"):
    bubble_sort()

with Cronometro("merge_sort"):
    merge_sort()
