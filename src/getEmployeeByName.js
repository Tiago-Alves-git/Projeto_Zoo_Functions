const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const funcionario = employees.find((nome) => nome.firstName === employeeName
   || nome.lastName === employeeName);
  return funcionario === undefined ? {} : funcionario;
}

console.log(getEmployeeByName(''));
module.exports = getEmployeeByName;
