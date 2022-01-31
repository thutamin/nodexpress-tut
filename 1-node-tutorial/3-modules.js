// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names'); // modules must always start with a dot
const sayHi = require('./5-utils');
const data = require("./6-alternative-flavor");
require("./7-mind-grenade") // when u are calling a module u are actullly invoking it. The reason that happened is beacause the code was not exported on its own. When a code is exported,
// it actually wraps it in a function



// console.log(data)
// console.log(sayHi)
// // console.log(names)



// sayHi("Susan");
// sayHi(names.john)
// sayHi(names.peter)