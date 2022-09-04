const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const gerentesIds = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8', '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

function isManager(id) {
  const resultado = gerentesIds.some((gerente) => gerente === id);
  return resultado;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const arrayDeFuncionarios = [];
    employees.forEach((funcionario) => {
      funcionario.managers.forEach((gerentes) => {
        if (gerentes === managerId) {
          arrayDeFuncionarios.push(`${funcionario.firstName} ${funcionario.lastName}`);
        }
      });
    });
    return arrayDeFuncionarios;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };

// .some((elemento) => elemento.id === id);
