#!/bin/bash
echo "Digite o nome da sua pasta:"
read PASTA
mkdir $PASTA #criando pasta com o nome inputado
echo "Aguarde"
echo "."
echo "."
echo "."
sleep 2
echo "Sua pasta foi criada com sucesso"
sleep 2
echo "Digite agora o nome do arquivo:"
read ARQUIVO 
cd ./$PASTA
touch $ARQUIVO.txt
echo "Aguarde"
echo "."
echo "."
echo "."
sleep 2
echo "Arquivo criado com sucesso!"
sleep 2
echo "Deseja adicionar algum item na lista? (y/n)"
read ANSWER
if [ "$ANSWER" == "y" ]
then 
    echo "Digite o nome do item:"
    read ITEM 
    echo "$ITEM" >> $ARQUIVO.txt
    echo "Deseja adicionar algum item na lista? (y/n)"
    read ANSWER
    if [ "$ANSWER" == "y" ]
    then 
        echo "Digite o nome do item:"
        read ITEM 
        echo "$ITEM" >> $ARQUIVO.txt

else
    echo "Ok! Tenha um bom dia"
fi