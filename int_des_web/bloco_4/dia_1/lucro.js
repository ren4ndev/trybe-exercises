let valorCusto = 100;
let valorVenda = 140;
let impostoSobreOCusto = 1.2;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Os valores informados estão errados");
} else {
    let valorCustoTotal = valorCusto * impostoSobreOCusto;
    let lucro = valorVenda - valorCustoTotal;
    console.log(lucro);
}