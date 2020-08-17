#!/bin/bash

DIRETORIO=$@ #Recebe como parãmetro o diretório. O @ faz com que seja quantos diretórios forem.
for DIRETORIOS in $DIRETORIO 
do
if [ -d $DIRETORIOS ]
then
    echo "É um diretório..."
elif [ -f $DIRETORIOS ]
then
    echo "É um arquivo..."
else
    echo "É qualquer coisa..."
fi
LISTAGEM=`ls -la $DIRETORIOS`
echo "Estes são os arquivos que estão em $DIRETORIOS : $LISTAGEM ."
done
