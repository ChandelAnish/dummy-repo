//built-in module

//1) OS module

const os=require('os')


//info about current user
const user =os.userInfo()
console.log(user)

//method returns the system uptime in seconds
//uptime is a measure of how long a computer or service is on and available
console.log("system uptime = ",os.uptime())

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)