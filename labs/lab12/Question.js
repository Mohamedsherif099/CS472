

/*

1-
      1: LibUV is a multi-platform support library that provides asynchronous I/O based on event loops. It was originally      developed for Node.js, but it’s a standalone C library used by other projects too.

        2: setImmediate(f) executes on the next event loop iteration after I/O, while setTimeout(f, Time) runs after the       specified delay, with a minimum wait even if set to 0.

       3: process.nextTick is part of the microtask queue, while setImmediate is part of the macrotask/event loop queue.

2-  

Th execution order of the code is as follows:


nextTick 1
Promise.resolve 1
Promise.resolve 2
nextTick inside Promise
this is setTimeout
this is setImmediate 1
this is setImmediate 2
Promise.resolve inside setImmediate
readablStream close event
From inside input.text
this is setTimeout


*/





// const fs = require('fs');


// const rd = fs.createReadStream("input.txt");

// rd.close();

// rd.on("close", () => console.log('readablStream close event'))

// fs.readFile('input.txt', "utf-8", (error, data) => {

//     if (error) console.log(error);

//     else console.log(data)

// });

// setTimeout(() => console.log("this is setTimeout"), 5000);

// setTimeout(() => console.log("this is setTimeout"), 0);

 

// setImmediate(() => console.log("this is setImmediate 1"));

// setImmediate(() => {

//     console.log("this is setImmediate 2")

//     Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));

// });

// Promise.resolve().then(() => console.log('Promise.resolve 1'));

// Promise.resolve().then(() => {

//     console.log('Promise.resolve 2')

//     process.nextTick(() => console.log('nextTick inside Promise'));

// });

// process.nextTick(() => console.log('nextTick 1'));