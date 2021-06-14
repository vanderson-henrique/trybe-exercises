# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar
# algumas partes de um software de geometria. Como poderíamos modelar um objeto
# retângulo?

# Nome da abstração: retângulo
# atributos: base, altura
# métodos:
#   - calcular_area (base * altura),
#   - calcular_perimetro ((base + altura) * 2)

class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return (self.base + self.altura) * 2


retangulo_1 = Retangulo(10, 5)
area_retangulo_1 = retangulo_1.calcular_area()
perimetro_retangulo_1 = retangulo_1.calcular_perimetro()


print(area_retangulo_1, perimetro_retangulo_1)
