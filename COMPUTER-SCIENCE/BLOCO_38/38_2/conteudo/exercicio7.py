# Exercício 7: Utilize o dicionário criado no exercício 5. Para as chaves
# ímpares, não queremos mais mapear para o seu sobro, mas sim, para o seu
# triplo. Consulte o método keys() e atualize o seu dicionário para a nova
# regra.

my_dict = {x: x * 2 for x in range(3, 21)}

my_keys = my_dict.keys()

for k in my_keys:
    if k % 2 != 0:
        my_dict[k] = k * 3


print(my_dict)
