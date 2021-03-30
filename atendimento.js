let bancoPets = require('./bancoPets.json');

let pets = bancoPets.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    servico();
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');
}

const tosarPet = () => {
    console.log('cortando as unhas do pet...');
}

const apararUnhasPet = () => {
    console.log('dando banho no pet...');
}

atenderCliente(pets[0], darBanhoPet);
atenderCliente(pets[0], tosarPet);
atenderCliente(pets[0], apararUnhasPet);
