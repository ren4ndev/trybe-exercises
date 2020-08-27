let porcentagem = 1000;

switch (porcentagem) {
    case (porcentagem < 0 || porcentagem > 100):
        console.log("Esta nota não pode ser calculada");
        break;
    case porcentagem < 50:
        console.log("F");
        break;
    case porcentagem >= 50 && porcentagem < 60:
        console.log("E");
        break;
    case porcentagem >= 60 && porcentagem < 70:
        console.log("D");
        break;
    case porcentagem >= 70 && porcentagem < 80:
        console.log("C");
        break;
    case porcentagem >= 80 && porcentagem < 90:
        console.log("B");
        break;
    case porcentagem > 90 && porcentagem <=100:
        console.log("A");
        break;
    default:
        console.log("Não entendi");
}

