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

const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarPets();

const campanhaVacina = () => {
    var soma = 0;
    for (let pet of pets){
        if (pet.vacinado == false) {
            soma++
        }
    }
    console.log(`${soma} pets foram vacinados!`)
}

campanhaVacina();


const darBanhoPet = (pet) => {
    for(let pet of pets){
            if(!(pet.servicos.includes('banho'))){
                pet.servicos.push('banho');
                console.log(`${pet.nome} está de banho tomado!`);    
        }
    } 
}   

darBanhoPet();

const tosarPet = (pet) => {
    for(let pet of pets){
            if(!(pet.servicos.includes('tosa'))){
                pet.servicos.push('tosa');
                console.log(`${pet.nome} está com o cabelinho na régua!`);    
        }
    } 
}   

tosarPet();

const apararUnhasPet = (pet) => {
    for(let pet of pets){
            if(!(pet.servicos.includes('patacure'))){
                pet.servicos.push('patacure');
                console.log(`${pet.nome} está de unhas aparadas!`);    
        }
    } 
}   

apararUnhasPet();

