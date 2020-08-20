DIRETORIO=$1
EXTENSOES=$2

DATA=`date +%F`

cd $DIRETORIO

for ARQUIVOS in `ls *.$EXTENSOES`
    do
    echo "Renomeando $ARQUIVOS para ${DATA}-${ARQUIVOS} "
    mv $ARQUIVOS ${DATA}-${ARQUIVOS}
    done