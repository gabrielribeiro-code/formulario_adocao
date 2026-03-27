let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf =  document.getElementById('cpf').value;


    document.getElementById('erroNome').textContent ='';
    document.getElementById('erroEmail').textContent ='';
    document.getElementById('erroTelefone').textContent ='';
    document.getElementById('erroCPF').textContent ='';

    if (nome.length < 3) {

        document.getElementById('erroNome').textContent = 'Nome invalido, Nome deve ter pelo menos 3 caracteres.';

        valido = false;

    }

    if(!email.includes('@')){

        document.getElementById('erroEmail').textContent = 'Email Invalido.';
        valido = false;
    }


    if(telefone.length < 8) {

        document.getElementById('erroTelefone').textContent = 'O telefone deve ter pelo menos 8 caracteres.';

        valido = false;

    }

    if(cpf.length < 8) {

        document.getElementById('erroCPF').textContent = 'O CPF deve ter pelo menos 14 caracteres.';

        valido = false;

    }


    if(valido){

        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `
        
        Dados enviados: <br>
        Nome: ${nome} <br>
        Email: ${email} <br>
        Telefone: ${telefone} <br>
        CPF: ${cpf} <br>
        
        `;

        form.reset();
        
    }



})