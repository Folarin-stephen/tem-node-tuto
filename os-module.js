// We could use all this functionality in the node runtime while they are useless on the browser runtime 
const os = require('os')
// console.log(os);
// info about current user
const user = os.userInfo()
// console.log(user);


// metod to return system uptimein seconds
console.log(`This is the system uptime ${os.uptime} in seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}
// console.log(currentOS);
console.log(currentOS.name);
console.log(currentOS.release);