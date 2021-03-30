const moment = require('moment');
const fs = require('fs');
let bancoPets = fs.readFileSync('./bancoPets.json');
const nomePetshop = "PETSHOP AVANADE";

bancoPets = JSON.parse(bancoPets);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoPets);

    fs.writeFileSync('bancoPets.json', petsAtualizado, 'utf-8')
}

const listarPets = () => {
    for(let pet of bancoPets.pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    }

    // bancoPets.forEach((pet) => {
    //     let {nome, idade, tipo, raca} = pet;
    //     console.log(`${nome}, ${nome}, ${idade}, ${tipo}, ${raca}`);

    //     pet.servicos.forEach((servico) => {
    //         console.log(`${servico.data} - ${servico.nome}`)
    //     })
    // });
}
listarPets();


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

        bancoPets.pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}

//Chamar aqui a funcao adicionarPet()
       

const campanhaVacina = () => {
    const pets = ["Billy", "Snoopy", "Bidu"]

    const petsVacinados = pets.map( vacinados => vacinados = false)
    
    console.log(petsVacinados)
}

campanhaVacina();



const darBanhoPet = pet => {
    for (const pet of bancoPets.pets) {
        pet.servicos.push('banho');
        console.log(`${pet.nome} está de banho tomado!`);  
    } 
};

darBanhoPet();

//Adicionar serviço de tosa nos pets
const tosarPet = pet => {
    for (const pet of bancoPets.pets) {
        pet.servicos.push('tosa');
        console.log(`${pet.nome} está com cabelinho na régua`);  
    } 
};

tosarPet();

//Adicionar serviço de patacure nos pets
const apararUnhasPet = pet => {
    for (const pet of bancoPets.pets) {
        pet.servicos.push('patacure');
        console.log(`${pet.nome} está de unhas aparadas!`);
    } 
};

apararUnhasPet();


