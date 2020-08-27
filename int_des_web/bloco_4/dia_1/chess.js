let peca = "QUEen";

let pecaLower = peca.toLowerCase();

switch (pecaLower) {
    case "pawn":
        console.log(pecaLower + " -> foward to 1");
        break;
    case "rook":
        console.log(pecaLower + " -> paralel to 7");
        break;
    case "knight":
        console.log(pecaLower + " -> paralel 2 + 1 perpendicular");
        break;
    case "bishop":
        console.log(pecaLower + " -> diagonal");
        break;
    case "queen":
        console.log(pecaLower + " -> anywhere");
        break;
    case "king":
        console.log(pecaLower + " -> anywhere to 1");
        break;
}