function lucro (valorCusto, valorVenda, impostoSobreOCusto) {
    if (valorCusto < 0 || valorVenda < 0) {
        console.log("Os valores informados estão errados");
    } else {
        let valorCustoTotal = valorCusto * impostoSobreOCusto;
        let lucro = valorVenda - valorCustoTotal;
        console.log(lucro);
    }
}

lucro(100, 140, 1.2);