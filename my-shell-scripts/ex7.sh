read -p "Digite aqui o diretório: " ARGUMENTO
if [ -d $ARGUMENTO ]
then
    LINHAS=`ls $ARGUMENTO | find -type f | wc -l`
    echo "O $ARGUMENTO tem $LINHAS arquivos." 
else       
    echo "O argumento $ARGUMENTO não é um diretório"
fi
