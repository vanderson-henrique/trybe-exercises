from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value} tail={self.tail})"

    def __len__(self):
        return self.__length

    def clear(self):
        node_clear = self.head_value
        while node_clear:
            self.remove_first()
            node_clear = self.head_value

    def insert_first(self, value):
        first_value = Node(value)
        if self.__length == 0:
            self.tail = first_value
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        if self.is_empty():
            return self.insert_first(value)
        # Meu atual último número aponta para o que será o último
        self.tail.next = last_value
        # Armazeno o novo value como tail
        self.tail = last_value
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
        # current_value = self.head_value
        # while position > 1:
        #     current_value = current_value.next
        #     position -= 1
        # next_value = Node(value)
        # next_value.next = current_value.next
        # current_value.next = next_value

        # Inserindo usando a própria função de localizar o elemento
        node_position_atual = self.get_element_at(position)
        node_position_preview = self.get_element_at(position - 1)
        new_node = Node(value)
        node_position_preview.next = new_node
        new_node.next = node_position_atual
        self.__length += 1

    def remove_first(self):
        if self.__length == 1:
            self.tail = None
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
        # previous_to_be_removed = self.head_value
        # while position > 1:
        #     previous_to_be_removed = previous_to_be_removed.next
        #     position -= 1
        # value_to_be_removed = previous_to_be_removed.next
        # previous_to_be_removed.next = value_to_be_removed.next
        # value_to_be_removed.next = None
        # self.__length -= 1

        # Removendo usando a própria função de localizar o elemento
        node_to_remove = self.get_element_at(position)
        node_preview = self.get_element_at(position - 1)
        node_preview.next = node_to_remove.next
        node_to_remove.next = None
        return node_to_remove

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
            if value_to_be_returned:
                value_returned = value_to_be_returned
        return value_returned

    def is_empty(self):
        return not self.__length

    def index_of(self, value):
        if self.is_empty():
            return -1
        count = 0
        node_index = self.head_value
        while node_index:
            if node_index.value == value:
                return count
            count += 1
            node_index = node_index.next
        if count > self.__length - 1:
            return -1
        return count


my_list = LinkedList()
my_list.insert_last(10)
my_list.insert_last(47)
my_list.insert_last(59)
my_list.insert_last(59)
my_list.insert_last(7)
print(my_list.index_of(59))
