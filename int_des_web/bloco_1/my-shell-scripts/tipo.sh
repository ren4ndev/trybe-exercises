#!/bin/bash

read -p "Digite o caminho do arquivo ou diretório:" PATH

if [ -d "$PATH" ]
then 
    echo "O caminho especificado é um DIRETÓRIO"
elif [ -f "$PATH" ]
    then
        echo "O caminho especificado é um ARQUIVO"
else
    echo "$PATH é alguma outra coisa"
fi

ls -l $PATH