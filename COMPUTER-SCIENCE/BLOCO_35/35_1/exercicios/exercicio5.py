# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).

def ink_value(wall_size):
    number_of_cans = (wall_size // 54)
    if wall_size % 54 != 0:
        number_of_cans += 1
    can_price = number_of_cans * 80.00
    return (number_of_cans, can_price)


print(ink_value(55))
