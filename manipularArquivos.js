let fs = require('fs');

let bancoDados = fs.readFileSync('pets.json', 'utf-8');

bancoDados = JSON.parse(bancoDados);

bancoDados.pets.push({
    "nome": "Ada",
    "tipo": "Cachorro",
    "idade": 2,
    "raca": "Chaw-chaw",
    "peso": 8,
    "tutor": "Jupinha",
    "contato": "(81) 99999-9999",
    "vacinado": true,
    "servicos": []
});

let petsAtualizado = JSON.stringify(bancoDados);

fs.writeFileSync('pets.json', petsAtualizado, 'utf-8');
