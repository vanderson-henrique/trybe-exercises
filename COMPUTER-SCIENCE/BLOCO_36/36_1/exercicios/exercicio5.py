# Que tal agora então modelarmos uma televisão?
# Pense em como encapsular comportamentos como o estado (ligado/desligado),
# ou a taxa de variação do volume, que muda de TV para TV etc.

# Abstração: Televisão
# Atributos:
# - volume_atual
# - canal_atual
# - tamanho (não pode ser modificado)
# - estado (ligada/desligada)
# - taxa_variacao_volume

# Comportamentos
# - Ligar/ desligar
# - aumentar/diminuir volume
# - trocar de canal

class Televisao:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.canal = 1
        self.volume = 0
        self.ligada = False
        self.taxa_variacao_volume = 2

    def liga_desliga(self):
        self.ligada = not self.ligada

    def aumenta_volume(self):
        if self.ligada:
            if (self.volume < 100):
                self.volume += self.taxa_variacao_volume

    def diminui_volume(self):
        if self.ligada:
            if (self.volume > 0):
                self.volume -= self.taxa_variacao_volume

    def trocar_canal(self, novo_canal):
        if self.ligada:
            self.canal = novo_canal


minha_tv = Televisao(42)
minha_tv.liga_desliga()
minha_tv.aumenta_volume()
minha_tv.trocar_canal(39)

print('canal:', minha_tv.canal)
print('tamanho:', minha_tv.tamanho)
print('volume:', minha_tv.volume)
print('Está ligada:', minha_tv.ligada)
