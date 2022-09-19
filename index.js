let usuario = document.getElementById('usuario');
let validUsuario = false;

let senha = document.getElementById('senha');
let validSenha = false;

let confirmaSenha = document.getElementById('confirmaSenha');
let validConfirmaSenha = false;

let email = document.getElementById('email');
let validEmail = false;

let msgErro = document.getElementById('msgErro');
let msgSucesso = document.getElementById('msgSucesso');


let divCadastro = document.getElementById('divCadastro');
    divCadastro.style.display = 'none';
let tamanhoDivLogin = document.getElementById('login');   
let botaoLogin = document.querySelector('.botaoLogin');


usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 2){
        usuario.setAttribute('style', 'color:red');
        validUsuario = false;
    }else{
        usuario.setAttribute('style', 'color:green');
        validUsuario = true;
    }

})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 3){
        senha.setAttribute('style', 'color:red');
        validSenha = false;
    }else{
        senha.setAttribute('style', 'color:green');
        validSenha = true;
    }

})

confirmaSenha.addEventListener('keyup', () => {
    if (senha.value !== confirmaSenha.value){
        confirmaSenha.setAttribute('style', 'color:red');
        validConfirmaSenha = false;
    }else
        confirmaSenha.setAttribute('style', 'color:gren');
        validConfirmaSenha = true;
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 2){
        email.setAttribute('style', 'color:red');
        validEmail = false;
    }else{
        email.setAttribute('style', 'color:green');
        validEmail = true;
    }

})
   
function FazerCadastro(){
        divCadastro.style.display = 'block';
        tamanhoDivLogin.style.height = '600px';
        botaoLogin.style.display = 'none'; 

}
function voltarLogin(){
        divCadastro.style.display = 'none';
        tamanhoDivLogin.style.height = '400px';
        botaoLogin.style.display = 'block';
        
}


function Cadastrar(){
    if(validUsuario && validSenha && validConfirmaSenha && validEmail){
        msgSucesso.setAttribute('style', 'display: block');
        msgSucesso.innerHTML = '<strong> Cadastrando usuário </strong>';
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = '';
        console.log('bom');
    }else{
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong> Preencha todos os campos corretamente! </strong>';
        console.log(usuario.value, senha.value, confirmaSenha.value, email.value);
        console.log(validUsuario, validSenha,validConfirmaSenha, validEmail)
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';
        console.log('ruim');

    }
    
    //db.transaction(function(armazenar){
     //   armazenar.executeSql('INSERT INTO users (usuario, senha) VALUES (?,?)',[usuario, senha, email]);
    //});
}



//BANCO DE DADOS DO BROWSER 
var db = openDatabase('Teste3', '2.0', 'Mybase', 4048);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE users (id INTEGER PRIMARY KEY, usuario TEXT, senha TEXT, email TEXT)");
});






function Entrar(){


}



function Excluir(){

}

function Alterar(){

}

