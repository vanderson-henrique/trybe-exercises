# Dado um array com os valores
array = [1, 2, 4, 5, 6]
# e outro com os valores
other_array = [7, 8, 9]
# podemos junta-los em um novo utilizando o operador +
new_array = array + other_array
# um novo array é criado e o conteúdo de ambos é copiado
# para a nova estrutura

# Uma outra operação interessante é a busca
# pois podemos buscar um elemento utilizando o operador in
# É equivalente a iterar sobre cada elemento e verificar a igualdade
# in new_array
# essa busca pode demorar um pouco já
# que se não encontrar pode acabar percorrendo toda a estrutura

# temos o count para contar quantas vezes um elemento aparece
print("Numero de vezes que o 1 se repete:", [1, 2, 1, 2, 1, 4, 5, 6].count(1))

# array de duas dimensões
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

# acessando um índice
print(matrix[1][1])  # saída: 5
# deletando um elemento á partir do índice
del matrix[2][2]
print(matrix)
