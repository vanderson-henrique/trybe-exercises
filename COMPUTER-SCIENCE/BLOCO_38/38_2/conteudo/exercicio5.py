# Exercício 5: Consulte a forma de se criar um dicionário chamado de dict
# comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu
# dobro.

# Ex.: {3: 6, 4: 8, 5: 10}

my_dict = {x: x * 2 for x in range(3, 21)}
print(my_dict)
