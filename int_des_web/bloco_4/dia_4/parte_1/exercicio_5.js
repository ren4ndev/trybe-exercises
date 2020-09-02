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

for (key in info) {
    let newString = [];
    newString.push(`${info[key]} e ${infoDois[key]}`);
    for (i = 0; i < newString.lentgh -1; i += 1) {
        console.log(i);
    }
}

if (info.recorrente == "Sim" && infoDois.recorrente == "Sim") {
    console.log("Ambos recorrentes");
}

//NAO FUNCIONOU