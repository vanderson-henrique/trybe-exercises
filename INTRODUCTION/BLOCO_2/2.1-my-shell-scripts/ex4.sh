#!/bin/bash

CAMINHO="/home/vanderson/Trybe"
if [ -e $CAMINHO ]
then
    echo "O caminho $CAMINHO está habilitado."
    if [ -w $CAMINHO ]
    then 
         echo "Você tem permissão para editar $CAMINHO ."
    else echo "Você não foi autorizado a editar $CAMINHO ." 
    fi    
else
    echo "Desculpe, o caminho $CAMINHO não existe."
fi

