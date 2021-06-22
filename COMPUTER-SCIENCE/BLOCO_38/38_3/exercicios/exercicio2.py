'''
Exercício 2 - Substring
Dada uma string , ache o tamanho da maior substring , que não tenha caracteres
repetidos. Complexidade de tempo limite aceitável: O(n^2) .
'''


def most_substring(string):
    letter_not_repeat = set()
    most_value = 0
    for letter in string:
        if letter not in letter_not_repeat:
            letter_not_repeat.add(letter)
            length_string = len(letter_not_repeat)
            if length_string > most_value:
                most_value = length_string
        else:
            letter_not_repeat.clear()
            letter_not_repeat.add(letter)
    return most_value


string = "serdevemuitolegalmasehprecisoestudarbastante"
# string = "abcabcajklmnopqrstabcdefgh"
print(most_substring(string))
