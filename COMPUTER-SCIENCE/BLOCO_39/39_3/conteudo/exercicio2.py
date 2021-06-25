'''
Exercício 2: Estenda a classe Stack , que escrevemos durante as explicações do
conteúdo, para que ela suporte um limite de itens dentro da pilha. Se
definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens.
'''

from stack import Stack


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() < self.limit:
            self._data.append(value)
        else:
            raise 'StackOverflow'


content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
