const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const bancoDados = require('./pets.json');

let pets = bancoDados.pets;

//Para adicionar um novo pet cliente 
const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        
        novoPet.nome = String(novoPet.nome);
        novoPet.tipo = String(novoPet.tipo);
        novoPet.idade = parseInt(novoPet.idade);
        novoPet.raca = String(novoPet.raca);
        novoPet.peso = parseInt(novoPet.peso);
        novoPet.tutor = String(novoPet.tutor);
        novoPet.contato = String(novoPet.contato);
        novoPet.vacinado = Boolean(novoPet.vacinado);

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }

        pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}

//Chamar aqui a funcao adicionarPet()

//Lista atualizada dos pets com If ternario pets vacinados
const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
    var vacinado = true
    var retorno = vacinado == "Pet vacinado" ? "Ainda precisa ser vacinado":

    console.log(retorno)
}

listarPets();

//Vacinar os pets que ainda não foram vacinados
const campanhaVacina = () => {
    var soma = 0;
    for (let pet of pets){
        if (pet.vacinado == false) {
            soma++
        }
    }
    console.log(`${soma} pets foram vacinados!`)
}

//Adcionar aqui a funcao da campanhaVacina

//Adicionar serviço de banho nos pets
const darBanhoPet = pet => {
    for (const pet of pets) {
        pet.servicos.push('banho');
        console.log(`${pet.nome} está de banho tomado!`);  
    } 
};

darBanhoPet();

//Adicionar serviço de tosa nos pets
const tosarPet = pet => {
    for (const pet of pets) {
        pet.servicos.push('tosa');
        console.log(`${pet.nome} está com cabelinho na régua`);  
    } 
};

tosarPet();

//Adicionar serviço de patacure nos pets
const apararUnhasPet = pet => {
    for (const pet of pets) {
        pet.servicos.push('patacure');
        console.log(`${pet.nome} está de unhas aparadas!`);
    } 
};

apararUnhasPet();

//console.log(JSON.stringify(pets))