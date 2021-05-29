# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo" , caso não
# seja possível formar um triângulo.

def define_triangle(side_a, side_b, side_c):
    type_triangle = ''
    if (side_a + side_b) <= side_c:
        type_triangle = 'Não é triângulo'
    elif (side_a + side_c) <= side_b:
        type_triangle = 'Não é triângulo'
    elif (side_b + side_c) <= side_a:
        type_triangle = 'Não é triângulo'
    elif side_a == side_b == side_c:
        type_triangle = 'Triângulo Equilátero'
    elif (side_a == side_b) or (side_b == side_c) or (side_a == side_c):
        type_triangle = 'Triângulo Isósceles'
    else:
        type_triangle = 'Triângulo Escaleno'
    return type_triangle


assert define_triangle(1, 2, 5) == 'Não é triângulo'
assert define_triangle(1, 5, 2) == 'Não é triângulo'
assert define_triangle(5, 2, 1) == 'Não é triângulo'
assert define_triangle(3, 3, 3) == 'Triângulo Equilátero'
assert define_triangle(10, 10, 12) == 'Triângulo Isósceles'
assert define_triangle(10, 14, 12) == 'Triângulo Escaleno'

print(define_triangle(10, 14, 12))
