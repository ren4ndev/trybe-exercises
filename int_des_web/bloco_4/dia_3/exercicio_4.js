let base = 100;
let text = "";
let spaces = 0;
let spacesText = "";
let fullText;

for (let i = 1; i <= base; i++) {
    spaces = (base - i) / 2;
    for (j = 1; j <= spaces; j++) {
        spacesText = spacesText + " ";
    }
    text = text + "*";
    fullText = spacesText + text + spacesText;
    if ((i % 2) !==0) {
        console.log(fullText);
    }    
    spacesText = "";
}