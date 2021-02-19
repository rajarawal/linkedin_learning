fs = require('fs')

function print(err , data){
    console.log("print 1")
}

console.log("print 2")
fs.readdir("c:/",print)
console.log("print 3")

//output print 2 print 3 print 1