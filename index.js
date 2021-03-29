const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./pets.json');
const nomePetshop = "PETSHOP AVANADE";

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados);

    fs.writeFileSync('pets.json', petsAtualizado, 'utf-8')
}

//Lista atualizada dos pets com If ternario pets vacinados
const listarPets = () => {
    for(let pet of bancoDados.pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    }
}
//listarPets();

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

        bancoDados.pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}

//Chamar aqui a funcao adicionarPet()
       


//Vacinar os pets que ainda não foram vacinados
const campanhaVacina = () => {
    var soma = 0;
    for (let pet of bancoDados.pets){
        if (pet.vacinado == false) {
            soma++
        }
    }
    console.log(`${soma} pets foram vacinados!`)
}

//Adcionar aqui a funcao da campanhaVacina

//Adicionar serviço de banho nos pets
const darBanhoPet = pet => {
    for (const pet of bancoDados.pets) {
        pet.servicos.push('banho');
        console.log(`${pet.nome} está de banho tomado!`);  
    } 
};

darBanhoPet();

//Adicionar serviço de tosa nos pets
const tosarPet = pet => {
    for (const pet of bancoDados.pets) {
        pet.servicos.push('tosa');
        console.log(`${pet.nome} está com cabelinho na régua`);  
    } 
};

tosarPet();

//Adicionar serviço de patacure nos pets
const apararUnhasPet = pet => {
    for (const pet of bancoDados.pets) {
        pet.servicos.push('patacure');
        console.log(`${pet.nome} está de unhas aparadas!`);
    } 
};

apararUnhasPet();

//console.log(JSON.stringify(pets))

listarPets()
