/**
 * JS
 */

const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];
inventors.push(...newInventors);

const name = ['Harry', 'Manchanda'];
function sayHi(first, last) {
  alert(`Hey there ${first} ${last}`);
}

sayHi(...name);