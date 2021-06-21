class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# Classe responsável por fazer o hash para definir o índice onde os dados serão
# salvos
class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

# Para povoar nossa hash, recebemos o objeto, computamos o seu address , a
# partir da chave numérica, e armazenamos no local adequado.
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

# Para acessar o dado de interesse, passamos a chave. A classe identifica o
# índice, onde a referência para aquele objeto está armazenada, e retorna o
# valor que estiver no campo name .
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

hashmap = HashMap()
for employee in employees:
    hashmap.insert(Employee(employee[0], employee[1]))

print(hashmap.get_value(10))
hashmap.update_value(10, 'name30')
print(hashmap.get_value(10))
