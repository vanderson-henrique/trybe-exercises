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

    def difference(self, conjuntoB):
        # retorno: outro objeto Conjunto com os elementos que tem em A e não em B
        new_conjunto = Conjunto()
        for index in range(1001):
            if self.values[index] and not conjuntoB.values[index]:
                new_conjunto.add(index)
        return new_conjunto

    def issubset(self, conjuntoB):
        # retorno: True se o A for subconjunto de B e False se não for
        for index in range(1001):
            if self.values[index] and not conjuntoB.values[index]:
                return False
        return True

    def issuperset(self, conjuntoB):
        # retorno: True se A for um superConjunto de B e False se não for
        for index in range(1001):
            if conjuntoB.values[index] and not self.values[index]:
                return False
        return True


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
conjC = Conjunto()
conjC.add(10)
conjC.add(14)
conjC.add(16)
conjC.add(11)


# print(conjA.union(conjB))
# print(conjA.intersection(conjB))
# print(conjA.difference(conjB))
print(conjB.issuperset(conjC))
