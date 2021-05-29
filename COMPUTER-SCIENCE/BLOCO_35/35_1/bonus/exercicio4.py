# Exercício 4: Um posto está vendendo combustíveis tabela de descontos:

def price_table(amount, type):
    price_gasoline = 2.5
    price_alcohol = 1.9
    total_price = 0
    if type == 'A' and amount <= 20:
        total_price = (price_alcohol * amount) * (1 - (3/100))
    elif type == 'A' and amount > 20:
        total_price = (price_alcohol * amount) * (1 - (5/100))
    elif type == 'G' and amount <= 20:
        total_price = (price_gasoline * amount) * (1 - (4/100))
    elif type == 'G' and amount > 20:
        total_price = (price_gasoline * amount) * (1 - (6/100))
    return total_price


print(price_table(1, 'G'))
