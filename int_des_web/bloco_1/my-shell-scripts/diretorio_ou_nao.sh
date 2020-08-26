#!/bin/bash

PATH=$1

if [ -d $PATH ]
then
    NUMERO=`ls -l $PATH | wc -l`
    echo "O $PATH tem $NUMERO arquivos"
else
    echo "O argumento não é um diretório"
fi
ls -l $PATH