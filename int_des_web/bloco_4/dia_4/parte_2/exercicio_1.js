function verificaPalindrome (string) {
    let newString = [];
    for (i in string) {
        newString.push(string[i.length - i])
    }
    return newString;
};

let newString = verificaPalindrome("arara");
console.log(newString);

//NAO FUNCIONOU