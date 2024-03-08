//there is no window object in node js but we have GLOBALS that can be accessed anywhere in the program.
//__dirname - gives path to current directory
//_filename - gives file name
//require - functoin to use modules(commonJS)
//module - info abourt current module(files) 
//process - info about environment where the program is being executed
console.log(__dirname)
setInterval(()=>{
    console.log("namestay world")
},2000)