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
let botaoCad = document.querySelector('#botaoCad');

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 5){
        usuario.setAttribute('style', 'color:red'); 
        validUsuario = false;
    }else{
        usuario.setAttribute('style', 'color:green');
        validUsuario = true;
    }

})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 6){
        senha.setAttribute('style', 'color:red');
        validSenha = false;
    }else{
        senha.setAttribute('style', 'color:green');
        validSenha = true;
    }

})


confirmaSenha.addEventListener('keyup', () => {
    if (confirmaSenha.value !== senha.value ){
        confirmaSenha.setAttribute('style', 'color:red');   
    }else
        confirmaSenha.setAttribute('style', 'color:green');

    if (confirmaSenha.value !== senha.value ){
        validConfirmaSenha = false;
    }
    else
        validConfirmaSenha = true;
})


email.addEventListener('keyup', () => {
    if (email.value.length <= 7){
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
                
                   
    }else {
            msgErro.setAttribute('style', 'display: block');
            msgErro.innerHTML = '<strong> Preencha todos os campos corretamente! </strong>';
            msgSucesso.setAttribute('style', 'display: none');
            msgSucesso.innerHTML = '';
        

            }
        
}    

function BuscaUsuario(){
    if(localStorage.length === 0){
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong> Nenhum usu??rio cadastrado!  </strong>';
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';

    }else{
        for(var i =0; i < localStorage.length; i++){
            a = localStorage.getItem(localStorage.key(i));
        }
        obj = JSON.parse(a);
        console.log(typeof obj);
    }
    
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
                localStorage.setItem('usuarioLogado', UsuarioValid.usuario);
              //  localStorage.setItem('token', token);
            }
              
        
        })      
         window.location.href = 'http://127.0.0.1:5500/bemvindo.html';
         console.log(UsuarioValid.usuario);

    }else{  
        i++;
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong> Usuario ou senha incorretos! </strong>';
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';
        }
      }   
}

email.addEventListener('keyup', function(e){
    if(e.code === 'Enter'){
        const btn = document.querySelector('#botaoCad');
        btn.click();
        
    }
});

senha.addEventListener('keyup', function(e){
    if(e.code ==='Enter'){
        const btn = document.querySelector('#btnEntrar');
        btn.click();
    }
});










  
  
 

  