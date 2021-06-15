# Implementação da abstração da classe Televisão

class Televisao:
    def __init__(self, tamanho):
        self._volume = 50
        self._canal = 1
        self._tamanho = tamanho
        self._ligada = False

    def aumentar_volume(self):
        if (self._volume < 99):
            self._volume += 1

    def diminuir_volume(self):
        if (self._volume > 0):
            self._volume -= 1

    def modificar_canal(self, newCanal):
        if not (1 <= newCanal <= 99):
            raise ValueError('Canal indisponível')
        self._canal = newCanal

    def ligar_desligar(self):
        self._ligada = not self._ligada


minha_tv = Televisao(42)
minha_tv.modificar_canal(12)
for _ in range(100):
    minha_tv.aumentar_volume()
minha_tv.modificar_canal(105)
print(minha_tv._canal)
