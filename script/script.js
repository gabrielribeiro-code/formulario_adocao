let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){


    e.preventDefault();


    

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf =  document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia_a').value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let horasAnimal = document.getElementById('horasAnimal').value;
    let pet = document.querySelector('input[name="pet"]:checked');
    let motivo = document.getElementById('motivo').value;
    let permite = document.getElementById('permite').checked;
    let seguro = document.getElementById('seguro').checked;
    let financeiro = document.getElementById('financeiro').checked;
    let adotar = document.getElementById('adotar').checked;
    let termo = document.getElementById('termo').checked;

    let cpfCadastrados = ["125678900", "11111111111"];
    
//Teste De Campo
  //  console.log("hello test")



    //validações

    if (nome.length < 3)  return alert("nome Inválido");
     if(!email.includes('@')) return alert("Email Inválido");
     if(telefone.length < 9) return alert("Telefone Inválido");
     if(cpf == "") return alert("CPF Obrigatorio");
     if(cpfCadastrados.includes(cpf)) return alert("CPF já cadastrado");
     if (idade < 18) return alert("Deve ser maior de 18 anos!");
     if (cidade == "") return alert("Deve colcocar obrigátorio a cidade!");
     if (moradia == "") return alert("Moradia");
     if(!quintal) return alert("Informe seu quintal");
     if(!pet) return alert ("informe seu pet");
     if(horasAnimal == "" || isNaN(horasAnimal)) return alert ("Horas inválidas");
     if(motivo.length < 10) return alert("Motivo pequeno!");
     if(!termo) return alert("aceite os termos para a adoção!");
         

     //validações regra de négocio

     if (moradia == "apartamento" && quintal.value == "sim"){
        return alert("apartamento não pode ter quintal!");
     }
    
     if (moradia == "apartamento" && !permite){
        return alert("Apartamento não permite animais!");
     }

     if (moradia == "casa" && !seguro){
        return alert("Informe se o quintal é seguro!");
     }

     if(horasAnimal < 8){
        return alert("Aninal ficará muito tempo sozinho, coitado!");
     }

     if(pet.value == "nao"){
        return alert("A ONG não irá te acompanhar!");
     }



     let motivosInvalidos = ["quero", "porque sim"];

     if(motivosInvalidos.includes(motivo.toLowerCase())){
        return alert("Motivo Inválido");
     }

     if(!financeiro){
        return alert("Sem condições financeiras!");

     }


    if(!adotar){
        return alert("Cuidado com sua escolha, sem pensar, sem cautela!");
    }

    document.getElementById("resultado").innerHTML = 
    "Cadastro realizado com sucesso!<br>" +
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Telefone: " + telefone + "<br>" +
    "Cidade: " + cidade;

})