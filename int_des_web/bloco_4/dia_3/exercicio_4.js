let n = 20;
let texto = "";
let spaces = 0;
let textoSpaces = "";
let textoCompleto

for (let i = 1; i <= n; i++) {
    spaces = (n - i) / 2;
    for (j = 1; j <= spaces; j++) {
        textoSpaces = textoSpaces + " ";
    }
    texto = texto + "*";
    textoCompleto = textoSpaces + texto + textoSpaces;
    if ((i % 2) !==0) {
        console.log(textoCompleto);
    }    
    textoSpaces = "";
}