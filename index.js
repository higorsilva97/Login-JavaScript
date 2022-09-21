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


let divCadastro = document.querySelector('#divCadastro');
    divCadastro.style.display = 'none';
let tamanhoDivLogin = document.getElementById('login');   
let botaoLogin = document.querySelector('.botaoLogin');

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 2){
        usuario.setAttribute('style', 'color:red'); //validação se o usuario ja tiver cadastrado????? ideia pra fazer
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
        //TA QUBRADO
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




function Cadastrar()
{
    
    if(validUsuario && validSenha && validConfirmaSenha && validEmail)
    {
        i = 0;
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
                listaUser.push(
                            {
                                usuarioCad: usuario.value,
                                senhaCad: senha.value,
                                emailCad: email.value
                            }
                        )
                localStorage.setItem('listaUser', JSON.stringify(listaUser));

                setTimeout(() => {
                    voltarLogin();
                }, 1500)

                msgSucesso.setAttribute('style', 'display: block');
                msgSucesso.innerHTML = '<strong> Cadastrado com sucesso!  </strong>';
                msgErro.setAttribute('style', 'display: none');
                msgErro.innerHTML = '';
                console.log('bom');
                   
    }else {
            msgErro.setAttribute('style', 'display: block');
            msgErro.innerHTML = '<strong> Preencha todos os campos corretamente! </strong>';
            console.log(usuario.value, senha.value, confirmaSenha.value, email.value);
            console.log(validUsuario, validSenha,validConfirmaSenha, validEmail)
            msgSucesso.setAttribute('style', 'display: none');
            msgSucesso.innerHTML = '';
            console.log('ruim');

            }
        
}    

//BANCO DE DADOS DO BROWSER 
var db = openDatabase('Teste3', '2.0', 'Mybase', 4048);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE users (id INTEGER PRIMARY KEY, usuario TEXT, senha TEXT, email TEXT)");
});

function BuscaUsuario(){
    if(localStorage.length === 0){
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong> Nenhum usuário cadastrado!  </strong>';
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';

    }
        for(var i =0; i < localStorage.length; i++){
            a = localStorage.getItem(localStorage.key(i));
        }
        obj = JSON.parse(a);
        console.log(obj);
    
}

function Entrar(){
    BuscaUsuario();
    i = 0;
    while (i < obj.length)
    {
    if(obj[i].usuarioCad === usuario.value && obj[i].senhaCad === senha.value)
    {
        msgSucesso.setAttribute('style', 'display: block');
        msgSucesso.innerHTML = '<strong> Login realizado com sucesso!  </strong>';
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = '';
        console.log(i);
        console.log(obj[i]);
        i = obj.length;
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        console.log(token);
       // window.location.href = 'http://127.0.0.1:5500/CRUD-JavaScript/bem-vindo.html';
       // document.location.reload(true);
      
       window.location.href = 'http://127.0.0.1:5500/CRUD-JavaScript/bemvindo.html';
       
      
    }else{  
        i++;
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong> Usuario ou senha incorretos! </strong>';
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';
        }
      }   

      /*
    let UsuarioValid = {
        usuario : '',
        senha : '',
        email : ''
    }
    let listaUser = JSON.parse(localStorage.getItem('listaUser'));
    listaUser.forEach((item) =>{ //varrer a lista
        if(usuario.value === item.usuarioCad && senha.value === item.senhaCad){
            UsuarioValid = {
                usuario: item.usuarioCad,
                senha: item.senhaCad,
                email: item.emailCad
            }
            console.log(UsuarioValid);
        }
          
    
    })

    */   
}

function Excluir(){

}

function Alterar(){

}






  
  
 

  