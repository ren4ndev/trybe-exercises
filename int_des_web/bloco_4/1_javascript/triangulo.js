function ehTriangulo (anguloA, anguloB, anguloC) {
    let soma = anguloA + anguloB + anguloC;
    if (soma == 180) {
        console.log("Isto é um triângulo");
    } else {
        console.log("Isto NÃO é um triângulo");
    }
}

ehTriangulo(70, 60, 50);