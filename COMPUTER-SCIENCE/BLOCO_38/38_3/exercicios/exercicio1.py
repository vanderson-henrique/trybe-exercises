'''
Exercício 1 - Blefe
Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a
outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive.
A pontuação final é calculada da seguinte forma:
A nota de partida de cada pessoa é o maior numero que a outra pessoa não
escolheu O redutor é o menor numero que a outra pessoa não escolheu A pontuação
final é a nota de partida - redutor
Implemente uma função que receba um dicionário com os nomes e números chutados
e retorne o nome de quem ganhou
'''


def winner_blefe(players):
    list_sets = []
    list_names = []
    for name, numbers in players.items():
        list_sets.append(set(numbers))
        list_names.append(name)

    player1 = list_sets[0]
    player2 = list_sets[1]

    difference_player1 = player1.difference(player2)
    difference_player2 = player2.difference(player1)

    most_value_p1 = max(list(difference_player1))
    min_value_p1 = min(list(difference_player1))
    score_p1 = most_value_p1 - min_value_p1

    most_value_p2 = max(list(difference_player2))
    min_value_p2 = min(list(difference_player2))
    score_p2 = most_value_p2 - min_value_p2

    if score_p1 > score_p2:
        return list_names[0]
    elif score_p2 > score_p1:
        return list_names[1]
    else:
        return 'Empate'


entrada = {
    'Clara': [1, 3, 5, 7, 9],
    'Marco': [1, 5, 4, 6, 9]
}
print(winner_blefe(entrada))
