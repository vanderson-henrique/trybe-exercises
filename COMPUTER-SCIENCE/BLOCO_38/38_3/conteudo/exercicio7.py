"""Exercício 7
Sua trajetória no curso foi um sucesso e agora você está trabalhando para a
Trybe! Em um determinado módulo, os estudantes precisam entregar dois trabalhos
para seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa
fica registrado. Precisamos saber como está o andamento da entrega das listas.
Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de
quem já entregou qual lista. A partir das listas abaixo, crie quatro funções
que respondem às perguntas a seguir."""

estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']


# Quem ainda não entregou a lista1?
def students_not_lista1():
    students = set(estudantes)
    lista1 = set(lista1_entregues)
    return students.difference(lista1)


# Quem já entregou as duas listas?
def students_on_track():
    lista1 = set(lista1_entregues)
    lista2 = set(lista2_entregues)
    return lista1.intersection(lista2)


# Quem já entregou qualquer uma das duas listas?
def students_any_list():
    lista1 = set(lista1_entregues)
    lista2 = set(lista2_entregues)
    return lista1.union(lista2)


# Quem ainda não entregou nenhuma das listas?
def students_off_track():
    students = set(estudantes)
    return students.difference(students_any_list())


print(students_not_lista1())
print(students_on_track())
print(students_any_list())
print(students_off_track())
