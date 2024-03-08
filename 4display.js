//to access the shared data we use require function
//we can either assign to a variable or simply require
const names=require('./3names')//always use ./ for own created modules or ../ or .../ if modeules are located 2 or 3 levels up
//just use ' ' for biult-in modules

//since you are accesing ./3names file here therefore all console.log of ./3names files will also be displayed here.

const display=require('./2modules')//importing function
console.log(names)
display("anish singh")
display(names.rahul)
display(names.rohit)
// display(names.secret)

console.log(names.items)
console.log(names.singleperson)