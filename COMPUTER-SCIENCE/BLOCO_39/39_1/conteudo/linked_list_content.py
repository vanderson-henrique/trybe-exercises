from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value
        # Verifica se a lista está vazia. Caso esteja, chama a função
        # 'insert_first' para inserir o elemento
        if self.is_empty():
            return self.insert_first(value)
        # Caso a lista tenha algum elemento, ele irá percorrer até chegar no
        # último (aquele que não possui 'next'), e então inserir como 'next'
        # na lista, ou seja como o último elemento
        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        # Se tentar inserir na posição 0, usa a função de inserir na primeira
        # posição
        if position < 1:
            return self.insert_first(value)
        # Se tentar inserir numa posição maior ou igual ao tamanho da lista,
        # usa a função de inserir na ultima posição
        if position >= len(self):
            return self.insert_last(value)
        # Começando pela primeira posição da lista, percorre ela até encontrar
        # a posição desejada. Então insere ela
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        # Para remover o primeiro elemento(cabeça) basta definir seu next como
        # o novo head_value, e não apontar seu valor para lugar nenhum
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        # Se a lista tiver tamanho 1, usa a função de remover o primeiro
        if len(self) <= 1:
            return self.remove_first()
        # Se a lista for maior, inicia pela cabeça e vai passando até chegar no
        # final, onde o penúltimo elemento passa a não apontar pra nada
        previous_to_be_removed = self.head_value

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        # Se for remover na primeira posição (0), usa a função remove_first
        if position < 1:
            return self.remove_first()
        # Se tentar remover numa posição maior ou igual ao tamanho da lista usa
        # a função remove_last
        if position >= len(self):
            return self.remove_last()
        # Senão, procura a posição desejada, remove a referencia pra ele, e a
        # dele
        previous_to_be_removed = self.head_value
        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
            if value_to_be_returned:
                value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length


my_list = LinkedList()
my_list.insert_first(1)
my_list.insert_first(2)
my_list.insert_first(3)
my_list.insert_last(10)
print(my_list)
