var hello = 0;
var tamanho = 0;
var apagar = 0;
var substituir = 0;
var nome;
var senha;
let verificador = false;
let repetir = 0
function Aparecer(){
    if(hello % 2 == 0){
        document.getElementById("escondido").style.display = "block";
        document.getElementById("aparecer").innerHTML = "Sumir"
    }
    else{
        document.getElementById("escondido").style.display = "none";
        document.getElementById("aparecer").innerHTML = "Aparecer"

    }
    hello++;
}
function MudarTamanho(){
    if(tamanho % 2 == 0){
        document.getElementById("text").style.fontSize = "40px";
        document.getElementById("tamanho").innerHTML = "Diminuir";
    }
    else{
        document.getElementById("text").style.fontSize = "16px";
        document.getElementById("tamanho").innerHTML = "Aumentar";
    }
    tamanho++;
}
function Apagar(){
    if(apagar % 2 == 0){
        document.getElementById("text").style.display = "none";
        document.getElementById("apagar").innerHTML = "Voltar";
    }
    else{
        document.getElementById("text").style.display = "block";
        document.getElementById("apagar").innerHTML = "Apagar";
    }
    apagar++;
}
function Substituir(){
    if(substituir % 2 == 0){
        document.getElementById("text").innerHTML = "<h4>WoW😵‍💫</h4>";
    }
    else{
        document.getElementById("text").innerHTML = "Texto de teste";
    }
    substituir++;
}
function Voltar(){
    document.getElementById("text").style.display = "block";
}
function ApagarTudo(){
    // document.write("<style>body{background-color:black;} h1{color:red; width: 100%; text-align: center;}</style> <h1>VOCÊ APAGOU TUDO, AGORA VAI TER CONSEQUÊNCIAS")
    document.write("");
}
function Nome(){
    let count = 0;
    verificador = true;
    nome = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    let bool = true;
    let len = nome.length
    if(len < 1){
        bool = false
    }
    for(let i = 0;i < len;i++){
        let char = nome.charCodeAt(i);
        if(bool){
            if(((char >= 97 && char <= 122) || (char >= 65 && char <= 90) || char == 32 || char >193) && char != ""){
                if(char != 32){
                    count++;
                }
            }
            else{
                bool = false;
            }
        }
    }
    if(!(bool && count > 0)){
        window.alert("O nome \" " + nome + " \" não é válido, insira apenas letras");
        verificador = false;
    }
    len = senha.length
    if(len < 8){
        window.alert("Senha fraca, sua senha deve ter pelo menos 8 caracteres");
        verificador = false;
    }
    if(verificador){
        if(nome != sessionStorage.getItem("Nome")){
            repetir = 0
        }
        console.log(repetir)
        if(repetir == 0){
        document.getElementById("enviar").innerHTML = '<a href = "main.html"><button class="botao">Enviar</button></a>'
        sessionStorage.setItem("Nome", nome);
        alert("Login feito com sucesso, aperte entrar para avançar");
        repetir = 1
        }
        else{
            alert("Você já fez o login, aperte Entrar para continuar")
        }
    }
    
}
function header(){
    let n = sessionStorage.getItem("Nome");
    document.getElementById("header").innerHTML = "Seja bem vindo " + n;
}
function Enviar(){
    if(!verificador){
        alert("Faça login antes de tentar acessar");
    }
}