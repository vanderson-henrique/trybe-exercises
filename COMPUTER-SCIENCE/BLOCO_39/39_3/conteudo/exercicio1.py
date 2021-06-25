'''
Exercício 1: Estenda a classe Stack , que escrevemos durante as explicações do
conteúdo, adicionando uma nova função chamada min_value() que irá retornar o
menor valor inteiro presente na pilha.
'''

from stack import Stack


class Other_Operations_Stack(Stack):
    def min_value(self):
        min_value = self.peek()
        for value in self._data:
            if value < min_value:
                min_value = value
                self.pop()
        return min_value


content_stack = Other_Operations_Stack()
content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value())  # saída: -2
