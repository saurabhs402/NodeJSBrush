const fs = require('fs')

console.log("Program started!!")

// stored in -Phase II
fs.readFile('./phase3.txt', 'utf-8', function (error, data) {
    if(error)
    console.log(error.message);
    else
    console.log(data+" read file");

    setTimeout(function () { console.log("File read Timer callback executed") }, 0)

    setImmediate(function () { console.log("File read setImmediate callback executed") })

    process.nextTick(function () {
        console.log("File read Next tick queue");
    })
})

//stored in- Phase I
setTimeout(function () { console.log("Timer callback executed") }, 0)

//stored in- Phase II
setImmediate(function () { console.log("setImmediate callback executed") })

process.nextTick(function(){
    console.log("Next tick queue");
})

console.log("Program Completed")