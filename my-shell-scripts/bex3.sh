#!/bin/bash

DATA=`date +%F`
for ARQUIVOS in `ls *.png`
    do
    mv $ARQUIVOS ${DATA}-${ARQUIVOS}
    done
