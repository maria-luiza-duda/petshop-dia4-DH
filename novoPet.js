const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const petsjson = require('./pets.json');

const novoCliente = () => {
    pets.push({
        nome: "Théo",
        tipo: "Cachorro",
        idade: 5,
        raca: "Chitzu",
        peso: 3,
        tutor: "Malu",
        contato: "81 3333-3333",
        vacinado: false,
        servicos: []
    });
    console.log(pets)
}

novoCliente();