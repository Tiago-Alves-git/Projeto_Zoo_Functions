const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function pegaPessoa(nameOrId) {
  const Funcionario = Object.values(nameOrId).toLocaleString();
  return employees.find((pessoa) => pessoa.firstName === Funcionario
  || pessoa.lastName === Funcionario || pessoa.id === Funcionario);
}
function pegaAnimal(id) {
  const Animais = [];
  pegaPessoa(id).responsibleFor.forEach((AnimalID) => Animais.push(species
    .find((Especie) => Especie.id === AnimalID)));
  return Animais;
}
function getEmployeesCoverage(Parametro) {
  return pegaAnimal(Parametro);
}

// console.log(getEmployeesCoverage(''));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Tiago' }));
module.exports = getEmployeesCoverage;
