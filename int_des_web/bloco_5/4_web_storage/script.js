let pagina = document.querySelector('#texto');
        let buttonApply = document.querySelector('#aplicar');
        let buttonPlus = document.querySelector('#open');
        let divSettings = document.querySelector('#settings');

        window.onload = function () {
            if (localStorage.fonte != undefined) {
                pagina.style.fontFamily = localStorage.getItem("fonte");
            }
            if (localStorage.tamanho != undefined) {
                pagina.style.fontSize = localStorage.getItem("tamanho");
            }
            if (localStorage.cor != undefined) {
                pagina.style.color = localStorage.getItem("cor");
            }
            if (localStorage.fundo != undefined) {
                pagina.style.backgroundColor = localStorage.getItem("fundo");
            }
            if (localStorage.espacamento != undefined) {
                pagina.style.lineHeight = localStorage.getItem("espacamento");
            }
        }

        buttonPlus.addEventListener('click', function(){
            if (divSettings.style.display == "none") {
                divSettings.style.display = '';
            } else {
                divSettings.style.display = "none";
            }
        })
        
        buttonApply.addEventListener('click', function(){
            let fonte = document.querySelector('#fonte');
            pagina.style.fontFamily = fonte.value;
            localStorage.setItem("fonte", fonte.value);

            let tamanho = document.querySelector('#tamanho');
            if (tamanho.value == "grande"){
                pagina.style.fontSize = "3em";
                localStorage.setItem("tamanho", "3em");
            } else if (tamanho.value == "medio") {
                pagina.style.fontSize = "2em";
                localStorage.setItem("tamanho", "2em");
            } else if (tamanho.value == "pequeno") {
                pagina.style.fontSize = "1em";
                localStorage.setItem("tamanho", "1em");
            }

            let cor = document.querySelector('#cor');
            if (cor.value == "preto"){
                pagina.style.color = "black";
                localStorage.setItem("cor", "black");
            } else if (cor.value == "branco"){
                pagina.style.color = "white";
                localStorage.setItem("cor", "white");
            } else if (cor.value == "azul"){
                pagina.style.color = "blue";
                localStorage.setItem("cor", "blue");
            }

            let fundo = document.querySelector('#fundo');
            if (fundo.value == "preto"){
                pagina.style.backgroundColor = "black";
                localStorage.setItem("fundo", "black");
            } else if (fundo.value == "branco"){
                pagina.style.backgroundColor = "white";
                localStorage.setItem("fundo", "white");
            } else if (fundo.value == "bege"){
                pagina.style.backgroundColor = "beige";
                localStorage.setItem("fundo", "beige");
            }

            let espacamento = document.querySelector('#espacamento');
            if (espacamento.value == "pequeno"){
                pagina.style.lineHeight = "1.1em";
                localStorage.setItem("espacamento", "1.1em");
            } else if (espacamento.value == "medio"){
                pagina.style.lineHeight = "1.3em";
                localStorage.setItem("espacamento", "1.3em");
            } else if (espacamento.value == "grande"){
                pagina.style.lineHeight = "1.5em";
                localStorage.setItem("espacamento", "1.5em");
            }
        })
        