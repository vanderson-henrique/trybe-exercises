# Exercício 1 Em um software monitor, que verifica a resiliência de outro
# software, precisamos saber qual o tempo máximo que um software permaneceu
# sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# e verificamos se está ok. Supondo um array que contenha os estados coletados
# por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem
# instabilidades.

def check_for_longer_time_without_instabilities(colected_values):
    result = 0
    access_result = 0
    for item in colected_values:
        if item == 0:
            access_result = 0
        if item == 1:
            access_result += 1
        if access_result > result:
            result = access_result
    return result


colected_values = [0, 1, 1, 1, 1, 1, 0, 1]
print(check_for_longer_time_without_instabilities(colected_values))
