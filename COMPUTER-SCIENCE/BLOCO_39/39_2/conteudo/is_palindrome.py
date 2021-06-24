from content_deque import Deque


def is_palindrome(string):
    list_words = string.split(' ')
    word = "".join(list_words)
    deque_word = Deque(50)
    for letter in word:
        deque_word.push_back(letter)
    while deque_word:
        # Se o primeiro e o último forem iguais, elimina eles e verifica os proximos
        if deque_word.peek_front() == deque_word.peek_back():
            deque_word.pop_front()
            deque_word.pop_back()
        else:
            return False
    return True


print(is_palindrome('a dama admirou o rim da amada'))
