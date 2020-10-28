let n = 20;
let texto = "";
let spaces = 0;
let textoSpaces = "";

for (let i = 1; i <= n; i++) {
    spaces = n - i;
    for (j = 1; j <= spaces; j++) {
        textoSpaces = textoSpaces + " ";
    }
    texto = texto + "*";
    console.log(textoSpaces + texto);
    textoSpaces = "";
}
