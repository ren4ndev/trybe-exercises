function numeroEhPar (numA, numB, numC) {
    if ((numA % 2) == 0 || (numB % 2) == 0 || (numC % 2) == 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

numeroEhPar (5, 7, 20);