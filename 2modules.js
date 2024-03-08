//modules - encapsulated code (only share minimum)
//node uses common JS libarary 
//by default every file in node is a module

function display(name)
{
    console.log("name = ",name);
}
// console.log(module)
console.log("hello i am from 2modules.js")
module.exports=display//exporting function