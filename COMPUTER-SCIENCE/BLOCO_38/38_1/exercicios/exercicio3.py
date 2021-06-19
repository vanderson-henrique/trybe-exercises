# Exercício 3 Dado um array de números inteiros que representam produtos em um
# e-commerce. Verifique quantos produtos formam boas combinações, considerando
# que uma boa combinação é quando um produto é igual ao outro e seu índice é
# maior que o anterior. Esta combinação pode ser utilizada para modificar os
# produtos de uma página.

# Exemplo 1:
# produtos = [1, 1, 1, 1, 1, 1]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.


def combination_items(list_items):
    list_access = []
    result = 0
    for item in list_items:
        if item not in list_access:
            count = list_items.count(item)
            for num in range(1, count):
                result += num
            list_access.append(item)
    return result


produtos = [1, 1, 1, 1, 1, 1, 2, 2]
print(combination_items(produtos))


# Solução menos custosa
# def good_pairs(numbers):
#     answer = 0
#     i = 0
#     size = len(numbers)
#     for i in range(size):
#         for j in range(i + 1, size):
#             if numbers[i] == numbers[j]:
#                 answer += 1
#     return answer
