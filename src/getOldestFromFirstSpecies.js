const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const Animal = data.employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const animalMaisVelho = species.find((animal) => animal.id === Animal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalMaisVelho);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
