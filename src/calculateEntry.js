const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objeto = { child: 0, adult: 0, senior: 0 };
  objeto.child = entrants.filter((criancas) => criancas.age < 18);
  objeto.child = objeto.child.length;
  objeto.adult = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50);
  objeto.adult = objeto.adult.length;
  objeto.senior = entrants.filter((senior) => senior.age >= 50);
  objeto.senior = objeto.senior.length;
  return objeto;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === '' || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  return countEntrants(entrants).child * 20.99 + countEntrants(entrants).adult * 49.99
  + countEntrants(entrants).senior * 24.99;
}

console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
