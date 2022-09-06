const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  const expectedCount = 4;
  expect(handlerElephants('count')).toStrictEqual(expectedCount);
  const expectedName = 'Jefferson';
  expect(handlerElephants('names')).toContainEqual(expectedName);
  const expectedAverageAge = 10.5;
  expect(handlerElephants('averageAge')).toBeCloseTo(expectedAverageAge);
  const expectedLocation = 'NW';
  expect(handlerElephants('location')).toStrictEqual(expectedLocation);
  const expectedPopularity = 5;
  expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(expectedPopularity);
  expect(Array.isArray(handlerElephants('availability'))).toBeTruthy();
  expect(handlerElephants()).toBeUndefined();
  const expectedObjetoVazio = 'Parâmetro inválido, é necessário uma string';
  expect(handlerElephants({})).toStrictEqual(expectedObjetoVazio);
  expect(handlerElephants('array')).toBeNull();
});
