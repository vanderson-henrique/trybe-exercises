conjuntoA = set([1, 2, 4, 5, 9])
conjuntoB = set([1, 4, 8, 9, 15, 10])
conjuntoC = set([1, 2, 9])
conjuntoD = set([9, 1, 2])
'''
set.isdisjoint(other) : retorna True se o set não tem nenhum elemento em comum 
com other, ou seja, se a intersecção é vazia;
'''

print(conjuntoA.isdisjoint(conjuntoB))
'''Retorna False pois eles tem elementos em comum'''

'''
set.issubset(other) : verifica se set é um subconjunto de other , ou seja,
se todo elemento de set está em other ;
'''
print(conjuntoC.issubset(conjuntoA))
'''Retorna True pois ConjuntoC é um subconjunto de ConjuntoA'''

'''set.issuperset(other): verifica se set é um superconjunto de other ,
ou seja, se todos os elementos de other estão em set . A diferença de um
superconjunto e de um subconjunto é que no superconjunto podem haver outros
elementos, além dos elementos de other já presentes dentro de set .
Já no subconjunto não;'''

print(conjuntoA.issuperset(conjuntoC))
'''Retorna True pois ConjuntoA contem todos os elementos de ConjuntoC
(mesmo tendo outros além desses)'''

'''set == other: verifica se os conjuntos são iguais, ou seja, se todos os
elementos de set estão em other e se todos os elementos de other estão em set.
Lembre-se que a ordem não importa. Não existe função dedicada para a
comparação de igualdade.'''
print(conjuntoC == conjuntoD)
'''Retorna True pois mesmo estando em ordem diferente os dois conjuntos
possuem os mesmos elementos'''

'''set.union(others): retorna a união entre o set e todos os other passados;'''
print(conjuntoA.union(conjuntoB))
# {1, 2, 4, 5, 8, 9, 10, 15} retorna a união dos conjuntos sem duplicar

'''set.intersection(others): retorna a intersecção entre set e todos os other
passados;'''
print(conjuntoA.intersection(conjuntoB))
# {1, 4, 9} retorna apenas o que tem em comum entre os conjuntos

'''set.difference(others): retorna a diferença entre set e todos os other
passados;'''
print(conjuntoA.difference(conjuntoB))
# {2, 5} retorna o que tem em A mas não tem em B

'''set.symmetric_difference(others): retorna todos os elementos que estejam em
um mas não estejam no outro conjunto (opera apenas sobre dois conjuntos).'''
print(conjuntoA.symmetric_difference(conjuntoB))
# {2, 5, 8, 10, 15} retorna o que tem exclusivamente em A e em B, mas não em comum