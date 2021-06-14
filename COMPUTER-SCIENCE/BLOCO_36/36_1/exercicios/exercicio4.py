# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas de
# uma cafeteria. Como podemos abstrair um pedido composto por vários itens?
# Qual seu nome, atributos e comportamentos?

# Abstração: Pedido
# Atributos:
#   - numero_pedido
#   - produtos_consumidos
#   - forma_pagamento
#   - atendente
# Comportamentos:
#   - calcular_valor_total

# Abstração: Item
# Atributos:
#   - nome
#   - valor_unitario
# Comportamentos:
#   - alterar_preco

class Item:
    def __init__(self, nome, valor_unitario):
        self.nome = nome
        self.valor_unitario = valor_unitario

    def alterar_preco(self, novo_preco):
        self.valor_unitario = novo_preco


class Pedido:
    def __init__(self, numero_pedido, produtos_consumidos, forma_pagamento, atendente):
        self.numero_pedido = numero_pedido
        self.produtos_consumidos = produtos_consumidos
        self.forma_pagamento = forma_pagamento
        self.atendente = atendente
        self.total = None

    def calcular_valor_total(self):
        total = 0
        for produto in self.produtos_consumidos:
            total = total + produto.valor_unitario
        self.total = total


refrigerante = Item('refrigerante', 1.89)
sanduba = Item('sanduba', 9.85)
bombom = Item('bombom', 3.45)

pedido_1 = Pedido(1, [refrigerante, sanduba, bombom], 'dinheiro', 'Vanderson')
pedido_1.calcular_valor_total()

print(pedido_1.numero_pedido, pedido_1.total)
