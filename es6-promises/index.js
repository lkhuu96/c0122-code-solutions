const takeAChance = require('./take-a-chance');

const name = takeAChance('Luc-Ky Khuu').then(value => { console.log(value); }, error => { console.error(error.message); });
