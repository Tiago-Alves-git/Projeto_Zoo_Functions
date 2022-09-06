const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const residentes = {};
    data.species.forEach((specie) => {
      residentes[specie.name] = specie.residents.length;
    });
    return residentes;
  }
  if (Object.keys(animal).length === 1) {
    const findAnimal = data.species.find((qualAnimal) => (
      qualAnimal.name === Object.values(animal)[0]
    ));
    return findAnimal.residents.length;
  }
  const findAnimalSexo = data.species.find((qualAnimal) => (
    qualAnimal.name === Object.values(animal)[0]
  ));
  return findAnimalSexo.residents.filter((sexo) => sexo.sex === Object.values(animal)[1]).length;
}

module.exports = countAnimals;
