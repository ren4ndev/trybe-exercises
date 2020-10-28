function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
}

let newString = verificaPalindrome("desenvolvimento");
console.log(newString);


//Exercício resolvido com ajuda do gabarito