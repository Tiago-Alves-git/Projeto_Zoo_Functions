const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const date = hours;

const obj = {
  Tuesday: { officeHour: `Open from ${date.Tuesday.open}am until ${date.Tuesday.close}pm`,
  },
  Wednesday: { officeHour: `Open from ${date.Wednesday.open}am until ${date.Wednesday.close}pm`,
  },
  Thursday: { officeHour: `Open from ${date.Thursday.open}am until ${date.Thursday.close}pm`,
  },
  Friday: { officeHour: `Open from ${date.Friday.open}am until ${date.Friday.close}pm`,
  },
  Saturday: { officeHour: `Open from ${date.Saturday.open}am until ${date.Saturday.close}pm`,
  },
  Sunday: { officeHour: `Open from ${date.Sunday.open}am until ${date.Sunday.close}pm`,
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function criaObjeto() {
  obj.Tuesday.exhibition = (data.species.filter((item) => item.availability
    .includes('Tuesday')).map((item) => item.name));
  obj.Wednesday.exhibition = (data.species.filter((item) => item.availability
    .includes('Wednesday')).map((item) => item.name));
  obj.Thursday.exhibition = (data.species.filter((item) => item.availability
    .includes('Thursday')).map((item) => item.name));
  obj.Friday.exhibition = (data.species.filter((item) => item.availability
    .includes('Friday')).map((item) => item.name));
  obj.Saturday.exhibition = (data.species.filter((item) => item.availability
    .includes('Saturday')).map((item) => item.name));
  obj.Sunday.exhibition = (data.species.filter((item) => item.availability
    .includes('Sunday')).map((item) => item.name));
  return obj;
}
function getSchedule(scheduleTarget) {
  const objetoCriado = criaObjeto();
  const Animais = species.map((Animals) => Animals.name);
  const Dias = Object.keys(obj);
  if (Dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: objetoCriado[scheduleTarget] };
  }
  if (Animais.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return criaObjeto();
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
