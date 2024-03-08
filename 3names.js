//local
const secret ="SUPER SECRET";
//share
let rahul="rahul"
let rohit="rohit"

module.exports={rahul,rohit,secret}//sharing names. Exporting as objects

// console.log(module)
console.log("hello i am from name.js")

//we also do like this:

// const items=['item1','item2']
// module.exports.itm=items;
//    OR
module.exports.items=['item1','item2']


const person={
    name:"as chandel"
}
module.exports.singleperson=person;