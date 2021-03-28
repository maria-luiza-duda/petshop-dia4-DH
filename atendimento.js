let bancoDados = require('./pets.json');

let pets = bancoDados.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    servico();
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');
}

atenderCliente(pets[0], darBanhoPet);
