# Exercício 4 Dado dois arrays de números inteiros que representam instantes de
# entrada e saídas em uma biblioteca e um número que represente um instante a
# ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele
# instante. Considere que todo estudante que entrou, saiu da biblioteca.

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def search_quantity_students_in_library(entrance, exit_student, instant):
    count = 0
    for ent, exi in zip(entrance, exit_student):
        if ent <= instant <= exi:
            count += 1
    return count


entrance = [1, 2, 3]
exit_studant = [3, 2, 7]
print(search_quantity_students_in_library(entrance, exit_studant, 8))
