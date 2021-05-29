file = open('notas.txt', mode='r')
lista_de_notas = []
for line in file:
    nota = line.split()
    lista_de_notas.append(nota)

file.close()

aprovados = []

for alunos in lista_de_notas:
    if int(alunos[1]) >= 6:
        aprovados.append(alunos[0])

file_aprovados = open('alunos-aprovados.txt', mode='w')
for file in aprovados:
    print(file, file=file_aprovados)

file_aprovados.close()
