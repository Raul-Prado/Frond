function MessagemDeSucesso(){

    //let mensagem = document.getElementById("enviarMensagem").value;
    let mensagemSucess = document.getElementById("AlertSucesso");

    // alert(mensagem);
    // mensagemSucess.style.display = "block";
    mensagemSucess.showModal();

    setTimeout(function() {
        mensagemSucess.close();
    }, 2000);
}

//Validar campos do formulario
function camposFormulario(){
    let campoNome = document.getElementById('name');
    let alertNome = document.querySelector('.mensagemAlerta');

    let campoEmail = document.getElementById('email');
    let alertEmail = document.querySelector('.mensagemAlerta');

    let campoTelefone = document.getElementById('phone');
    let campoEndereco = document.getElementById('local');
    let campoOpcoes = document.getElementById('browser');

    if(campoNome.value.length < 3){
        alertNome.innerHTML = 'Nome Inválido';
        alertNome.style.color = 'red';
    }else{
        alertNome.innerHTML = 'Nome Válidado'
        alertNome.style.color = 'green'

        setTimeout(function(){
            alertNome.innerHTML = "";
        }, 3000);
    }

    if(campoEmail.value.length < 3){
        alertEmail.innerHTML = 'E-mail Inválido';
        alertEmail.style.color = 'red';
    }else{
        alertEmail.innerHTML = 'E-mail Válidado'
        alertEmail.style.color = 'green'

        setTimeout(function(){
            alertEmail.innerHTML = "";
        }, 3000);
    }
}