# Exercício 2: Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo
# uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte
# formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você
# deve imprimir a soma dos valores válidos.

numbers = input('Digite os números separados por espaço:')

list_of_numbers = numbers.split()
total = 0
for num in list_of_numbers:
    if num.isdigit():
        total += int(num)
    else:
        print(f"Erro ao somar valores, {num} é um valor inválido")

print(total)
