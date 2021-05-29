# Abre o arquivo no modo escrita
file = open('arquivo.txt', mode='w')

# Escreve no arquivo o \n serve para quebrar linha
file.write('Python\n')
file.write('JavaScript\n')
file.write('C#\n')

# Outra forma de se escrever no arquivo é com a função print passando o arquivo
# como segundo parametro. Por padrão o print já tem quebra de linha
print('Java', file=file)

# Para escrever várias linhas no arquivo
LISTA = ['HTML\n', 'CSS\n']
file.writelines(LISTA)

# Para fechar o arquivo depois de manipulá-lo
file.close()
