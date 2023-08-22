// console.log(__dirname);

const names = require('./3-names')
const sayHi = require('./4-utils')
const datas = require('./5-alt-flavour')
require('./6-mind-grenade')
console.log(names);
console.log(names.john);
console.log(datas);
console.log(datas.items[0])
console.log(datas.singleperson.name)
console.log(john)
console.log(peter)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)