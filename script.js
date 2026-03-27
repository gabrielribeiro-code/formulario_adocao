let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf =  document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia').value;
    let quintal = document.getElementById('quintal').value;
    let horasAnimal = document.getElementById('horasAnimal').value;
    let pet = document.getElementById('pet').value;


    document.getElementById('erroNome').textContent ='';
    document.getElementById('erroEmail').textContent ='';
    document.getElementById('erroTelefone').textContent ='';
    document.getElementById('erroIdade').textContent ='';
    document.getElementById('erroCidade').textContent ='';
    document.getElementById('erroMoradia').textContent ='';
    document.getElementById('erroQuintal').textContent ='';
    document.getElementById('erroPet').textContent ='';
     document.getElementById('erroHorasAnimal').textContent ='';

    if (nome.length < 3) {

        document.getElementById('erroNome').textContent = 'Nome invalido, Nome deve ter pelo menos 3 caracteres.';

        valido = false;

    }

    if(!email.includes('@')){

        document.getElementById('erroEmail').textContent = 'Email Invalido.';
        valido = false;
    }


    if(telefone.length > 9) {

        document.getElementById('erroTelefone').textContent = 'O telefone deve ter apenas 9 caracteres.';

        valido = false;

    }

    if(cpf.length > 14) {

        document.getElementById('erroCPF').textContent = 'O CPF deve ter pelo menos 14 caracteres.';

        valido = false;

    }

     if(idade.length < 3) {

        document.getElementById('erroIdade').textContent = 'ERRO! Não é permitido idade com mais de 3 caracteres.';

        valido = false;

    }

    if(cidade.length <= 32) {

        document.getElementById('erroCidade').textContent = 'ERRO! Não é um nome de cidade com mais de 32 caracteres.';

        valido = false;

    }

    if(horasAnimal.length < 24) {

        document.getElementById('erroHorasAnimal').textContent = 'Erro! Não é possível que o animal fica mais de 24 horas sozinho!';

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