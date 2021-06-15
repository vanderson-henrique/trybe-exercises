from abc import ABC, abstractmethod
import json
import csv

# Classe abstrada que serve para ser ascendente de outras classes mais
# específicas


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]
# Função abstrata que mostra que todas as classes herdeiras desta, devem
# implementar a função serialize

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        return 1


# Esta classe é herdeira da classe SalesReport, então ela possui as mesmas
# assinaturas (parâmetros e nome)
class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_length(self):
        return 3


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            writer = csv.writer(file)
            writer.writerow(self.build())

    def get_length(self):
        return 3


meu_relatorio_json = SalesReportJSON('meu_relatorio_json')
meu_relatorio_json.serialize()

meu_relatorio_csv = SalesReportCSV('meu_relatorio_csv')
meu_relatorio_csv.serialize()
meu_relatorio_json.get_length()
