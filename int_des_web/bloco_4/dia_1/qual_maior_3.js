let a = 3558;
let b = 2;
let c = 169;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > b && c > a) {
    console.log(c);
} else {
    console.log("Não foi possível calcular");
}