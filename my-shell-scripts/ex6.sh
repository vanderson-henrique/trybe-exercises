#!/bin/bash

DIRETORIO=$1 #Recebe como parãmetro o diretório
if [ -d $DIRETORIO ]
then
    echo "É um diretório..."
elif [ -f $DIRETORIO ]
then
    echo "É um arquivo..."
else
    echo "É qualquer coisa..."
fi
LISTAGEM=`ls -la $DIRETORIO`
echo "Estes são os arquivos que estão em $DIRETORIO : $LISTAGEM ."