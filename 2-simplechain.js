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
// Duplicate of promise 1 so that we have another promise to chain.
//
console.log("Define promise 2");
const promise2 = new Promise(function(res,rej) {
    console.log("presleep 2");
    setTimeout(function() { res('sleep resolve 2');}, 100);
    console.log("postsleep 2");
});

//
// Invoke the promises in a 'simple' chain.  By simple I mean that the chain is pretty much defined in this code
//  here and that there isn't any chaining happening either in the promise itself or by a promise returning a promise..
//
console.log(" ");
console.log("Invoke promise 1");
promise1.then(result1 => {
        console.log("Promise 1 fulfilled", result1);
        console.log("Invoke promise 2");
        promise2.then (result2 => {
                console.log("Promise 2 fulfilled", result2);
            },
            error => {
                console.log("Promise 2 rejected", error);
            }    
        )
    },
    error => {
        console.log("Promise 1 rejected", error);
    })
    .catch (error => {
            // Catches any exception that happens in the 'then' statement or the promise (but not the promise 'error' return 
            //    that's caught in the .then)
            console.log("Catch error", error);
        }
    );