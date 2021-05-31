# Retornar a porcentagem de livros pro categoria lidos de um arquivo json
import json
import csv

with open('books.json') as books_json:
    books = json.load(books_json)

categorias = set()
categorias_livros = []
for book in books:
    categorias_livros.extend(book['categories'])
    for categoria_livro in categorias_livros:
        categorias.add(categoria_livro)

relatorio = dict()
for categoria in categorias:
    relatorio[categoria] = []
for categoria, conj_livros in relatorio.items():
    for book in books:
        if categoria in book['categories']:
            conj_livros.append(book)

with open('relatorio-livros.csv', 'w') as relatorio_csv:
    writer = csv.writer(relatorio_csv)
    total_books = len(books)
    headers = ['Categoria', 'Percentual']
    writer.writerow(headers)
    for categoria in relatorio:
        total_books_por_categoria = len(relatorio[categoria])
        print(categoria, total_books, total_books_por_categoria)
        perc = round(((total_books_por_categoria * 100) / total_books), 2)
        writer.writerow([categoria, perc])
