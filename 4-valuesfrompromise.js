//
// promise1:
//
// For purposes of demonstration we are going to use a 'sleep' for the producing/async operation.
//
// Because we are defining the function in the promise we can use our own variable names, although 'resolve' and 'reject' are the 
//  recommended.
//
console.log("Define promise 1");
const promise1 = new Promise(function(res,rej) {
    console.log("presleep 1");
    setTimeout(function() { res('sleep resolve 1');}, 500);
    console.log("postsleep 1");
});

//
// promise2:
//
// Calls promise1 as its resolution (res)
//
console.log("Define promise 2");
const promise2 = new Promise(function(res,rej) {
    console.log("pre-resolve 2");
    promise1.then(result => {
        res("promise2 result <- " + result);
        });
    console.log("post-resolve 2");
});


//
// promise3: 
//
// Calls promise 2 as its resolution.
//
console.log("Define promise 3");
const promise3 = new Promise(function(res,rej) {
    console.log("pre-resolve 3");
    promise2.then(result => {
        res("promise3 result <- " + result);
        });
    console.log("post-resolve 3");
});

//
// A more complex chain.   Here promise 3 returns promise 2 returns promise 1...  
//
//  The important thing to understand is that promise 2 returns a promise (promise 1) to promise 3 rather than a 'resolved' string.   
//
console.log(" ");
console.log("Invoke promise 3");
promise3.then(result => {
        console.log("Promise 3 fulfilled: ", result);
    },
    error => {
        console.log("Promise 3 rejected", error);
    })
    .catch (error => {
            // Catches any exception that happens in the 'then' statement or the promise (but not the promise 'error' return 
            //    that's caught in the .then)
            console.log("Catch error", error);
        }
    );