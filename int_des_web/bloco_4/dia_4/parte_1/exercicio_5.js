let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

let infoDois = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim" 
}

if (info.recorrente == "Sim" && infoDois.recorrente == "Sim") {
    let newString = [];
    for (key in info) {
        newString.push(`${info[key]} e ${infoDois[key]}`);
    }
    newString.pop();
    for (i in newString) {
        console.log(newString[i]);
    }
    console.log("Ambos recorrentes");
}




//NAO FUNCIONOU