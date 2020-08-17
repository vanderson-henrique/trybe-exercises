#!/bin/bash

read -p "Degite aqui o caminho do diretório" DIRETORIO #Pede ao usuário o diretório e armazena na variável "Diretório"
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
