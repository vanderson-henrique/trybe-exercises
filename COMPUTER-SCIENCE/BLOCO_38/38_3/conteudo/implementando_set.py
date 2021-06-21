class Conjunto:
    def __init__(self):
        self.values = [False for index in range(1001)]

    def add(self, item):
        if not self.values[item]:
            self.values[item] = True

    def __str__(self):
        # retorno: uma string que representa o seu objeto
        string = '{'
        for index, is_in_set in enumerate(self.values):
            if is_in_set:
                string += str(index) + ', '
        string = string[:-2] + '}'
        return string

    def __contains__(self, item):
        # retorno: True, caso o elemento faça parte. False, caso o elemento
        # não faça parte.
        return self.values[item]

    def union(self, conjuntoB):
        # retorno: outro objeto Conjunto com união do próprio objeto com o
        # conjuntoB
        new_conjunto = Conjunto()
        for index in range(1001):
            if self.values[index] or conjuntoB.values[index]:
                new_conjunto.add(index)
        return new_conjunto

    def intersection(self, conjuntoB):
        # retorno: outro objeto Conjunto com intersecção do próprio objeto com
        # o conjuntoB
        new_conjunto = Conjunto()
        for index in range(1001):
            if self.values[index] and conjuntoB.values[index]:
                new_conjunto.add(index)
        return new_conjunto


if __name__ == '__main__':
    conj = Conjunto()

    for item in [0, 10, 100, 1000]:
        conj.add(item)


# my_conj = Conjunto()
# for item in [0, 10, 100, 1000]:
#     my_conj.add(item)

# print(my_conj.__str__())
# print(my_conj.__contains__(101))
conjA = Conjunto()
for item in range(11):
    conjA.add(item)
conjB = Conjunto()
for item in range(10, 21):
    conjB.add(item)

print(conjA.union(conjB))
print(conjA.intersection(conjB))
