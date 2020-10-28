let base = 101;
let textBase = "";
let spacesExt = 0;
let spacesExtText = "";
let spacesInt = 0;
let spacesIntText = "";
let fullText;
let caracter = "";

for (let i = 1; i < base; i += 2) {
    //Verificando quantidade de espaços Externos
    spacesExt = (base - i) / 2;
    //Montando texto de espaços Externos
    for (j = 1; j <= spacesExt; j++) {
        spacesExtText = spacesExtText + " ";
    }

    //Verificando quantidade de espaços Internos
    spacesInt = base - (spacesExt * 2) - 2;
    //Montando texto de espaços Internos
    for (j = 1; j <= spacesInt; j++) {
        spacesIntText = spacesIntText + " ";
    }

    if (i == 1) {
        fullText = spacesExtText + "*" + spacesExtText;
    } else {
        
        fullText = spacesExtText + "*" + spacesIntText + "*" + spacesExtText;
    }
    
    if ((i % 2) !==0) {
        console.log(fullText);
    }    
    spacesExtText = "";
    spacesIntText = "";
}

for (x = 0; x < base; x++) {
    textBase = textBase + "*";
}

console.log(textBase);