let email = document.getElementById("email");
let nome = document.getElementById("nome");
let btn = document.getElementById("btn");
let mensagem = document.getElementById("mensagem");
let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function setError(){
    email.style.border = '2px #d30909 solid'
    email.style.backgroundColor = "#ce51513d"
}

function setErrorNome(){
    nome.style.border = '2px #d30909 solid'
    nome.style.backgroundColor = "#ce51513d"
}

function removeError(){
    email.style.backgroundColor = "#fff"
}

function removeErrorNome(){
    nome.style.backgroundColor = "#fff"
}

function verificarItens() {

// Validando o Nome;
    if(nome.value.length >= 4) {
        removeErrorNome()
    } else if(nome.value == '') {
        console.log("Não tem nenhum nome")
    } else {
        setErrorNome()
    }

// Validando o Email;    
    if(emailRegex.test(email.value)) {
        removeError()   
        alert("Email enviado com sucesso!")
        nome.value = '';
        email.value = '';
        mensagem.value = '';
    } else if(email.value == '') {
        console.log("Não tem NADA")
    } else {
        setError()
    } 
}

verificarItens()



