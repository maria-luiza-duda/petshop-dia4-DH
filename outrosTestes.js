const nomePetShop = "PETSHOP"

let pets = [{
        nome: "Billy",
        tipo: "Cachorro",
        idade: 1,
        raca: "Poodle",
        peso: 2,
        tutor: "Malu",
        contato: "(81) 98346-8310",
        vacinado: true,
        servicos: ["banho", "tosa"]
    },
    {
        nome: "Negão",
        tipo: "Cachorro",
        idade: 16,
        raca: "Vira-lata",
        peso: 5,
        tutor: "Marinete",
        contato: "(81) 5555-5555",
        vacinado: true,
        servicos: ["banho", "tosa"]
    },
    {
        nome: "Paco",
        tipo: "Gato",
        idade: 4,
        raca: "Vira-lata",
        peso: 5,
        tutor: "Maria Eduarda",
        contato: "(81) 4444-5555",
        vacinado: false,
        servicos: ["banho","corte de unha"]
    },
    {
        nome: "Patrick",
        tipo: "Coelho",
        idade: 2,
        raca: "coelho",
        peso: 4,
        tutor: "Marinete",
        contato: "(81) 5555-5555",
        vacinado: true,
        servicos: []
    }
];

const listarPets = () => {
    //for(let i = 0; i < pets.length; i++){
        //console.log(pets[i].nome + " " + pets[i].raca);
        //console.log(`O nome do pet é ${pets[i].nome}` + ` e a sua raça é ${pets[i].raca}`)
    //}
    for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}
listarPets();

/*const vacinarPet = () => {
    for(let pet of pets){
        console.log(`O pet ${pet.nome} foi vacinado? ${pet.vacinado}`)
    }
}
vacinarPet();*/

/*const vacinarPet = () => {
    for(let pet of pets){
        if(pet.vacinado == true){
            console.log(`O pet ${pet.nome} não foi vacinado.`)
        } 
    }
}

vacinarPet();*/

const vacinarPet = () => {
    for (let pet of pets) {
        if (pet.vacinado == false){
            pet.vacinado = true;
            console.log(`${pet.nome} foi vacinado.`)
        }
        else {
            console.log(`Ops, ${pet.nome} já está vacinado.`)
        }
    }
}

vacinarPet();