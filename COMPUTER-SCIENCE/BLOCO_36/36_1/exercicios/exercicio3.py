# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos
# e comportamentos?

# Abstração: círculo
# Atributos:
#     - raio
# Métodos:
# - calcular_circunferencia = ( 2 * pi * raio)
# - calcular_area = (pi * (raio ** 2))
# - calcular_diametro = 2 * raio


class Circulo:
    def __init__(self, raio):
        self.raio = raio
        self.pi = 3.14
        self.circunferencia = None
        self.area = None
        self.diametro = None

    def calcular_circunferencia(self):
        self.circunferencia = 2 * self.pi * self.raio

    def calcular_area(self):
        self.area = (self.pi * (self.raio ** 2))

    def calcular_diametro(self):
        self.diametro = 2 * self.raio


circulo_1 = Circulo(3)
circulo_1.calcular_circunferencia()
circulo_1.calcular_area()
circulo_1.calcular_diametro()

print(circulo_1.area, circulo_1.circunferencia, circulo_1.diametro)
