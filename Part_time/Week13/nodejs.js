const greeting = require('./greeting.js');
const {arr} = require('./modules/exercise')

console.log(greeting);
const name = 'Yaniv Maximov'

greeting.greeting(name)
// greeting(name)
console.log(arr);