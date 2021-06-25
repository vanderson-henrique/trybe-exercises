'''
Exercício 3: Um estacionamento comercial possui uma garagem em forma de linha,
ou seja, somente é possível parar os carros enfileirados. Para auxiliar as
pessoas que trabalham manobrando os veículos, iremos escrever um programa para
que eles consigam adicionar novos veículos na garagem e retirar os veículos
conforme a solicitação dos clientes. Escreva um programa que faça essas duas
operações, inserção de veículos e a remoção do veículo desejado pela pessoa.
Lembrando que os veículos que foram removidos para se chegar no veículo do
cliente, ficam parados na rua e depois são adicionados na mesma ordem que
estavam no estacionamento.
'''
from stack import Stack


class Stack_Parking(Stack):
    def remove_car(self, car):
        street_stack = Stack()
        while not self.is_empty():
            remove_car = self.pop()
            if car != remove_car:
                street_stack.push(remove_car)
            else:
                for index in range(street_stack.size(), 0, -1):
                    self.push(street_stack.pop())
                break
        return self._data


estacionamento = Stack_Parking()
estacionamento.push('siena')
estacionamento.push('argo')
estacionamento.push('sandero')
estacionamento.push('uno')
estacionamento.push('ferrari')
estacionamento.remove_car('ferrar')
print(estacionamento)
