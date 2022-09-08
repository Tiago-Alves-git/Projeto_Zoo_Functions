const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (Object.values(species).some((animal) => animal.name === scheduleTarget) === true) {
    return 'aa.b';
  }
  if (Object.keys(hours).some((dia) => dia === scheduleTarget) === true) {
    return 'bb.a';
  }
  return 'cc.c';
}
function getDia(Parametro) {
  return Parametro;
}
function getAnimal(Parametro) {
  return Parametro;
}
function getTudo(Parametro) {
  return Parametro;
}

console.log(getSchedule('Friday'));
console.log(getDia);
console.log(getAnimal);
console.log(getTudo);
module.exports = getSchedule;
