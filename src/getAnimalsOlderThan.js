const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  // const teste = JSON.stringify(species);
  // const testeJson = JSON.parse(teste);
  const especie = species.find((nome) => nome.name === animal);
  // especie.residents.forEach((element) => console.log(element.age));
  const maisVelho = especie.residents.every((residentes) => residentes.age >= idade);
  return maisVelho;
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
