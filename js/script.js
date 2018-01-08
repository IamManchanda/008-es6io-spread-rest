/**
 * JS
 */

function convertCurrency(rate, ...amounts) {
  return amounts.map(amount => amount * rate);
}

const getAmounts = convertCurrency(64, 10, 23, 52, 1, 56);
console.log(getAmounts);

const runner = ['Harry Manchanda', 123, 5.5, 5, 3, 6, 35];

const [name, id, ...runs] = runner;
console.log(name, id, runs);

const team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelly'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, players)
