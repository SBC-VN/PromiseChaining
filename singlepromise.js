//
// promise1:
//
// For purposes of demonstration we are going to use a 'sleep' for the producing/async operation.
//
// Because we are defining the function in the promise we can use our own variable names, although 'resolve' and 'reject' are the 
//  recommended.
//
console.log("Define promise 1")
const promise1 = new Promise(function(res,rej) {
    console.log("presleep 1");
    setTimeout(function() { res('sleep resolve 1');}, 300);
    console.log("postsleep 1");
});


//
// Invoke the promise.   
//
// A few notes:
//     Must use 'result' and 'error', evidently it's sort of a semi-keyword (can't use arbitrary variables like 'res' and 'err').
//     Both the result and error from the promise itself are 'caught' by the '.then'. 
//     The '.catch', if used [ie: promise1.then(result,error).catch(error)] will NOT catch the error from the promise!  It catches any
//       error that happens in the (any) '.then(...)'.
//
console.log("Invoke promise 1");
promise1.then(result => {
        console.log("Fullfiled", result);
    },
    (error) => {
        console.log("Rejected", error);
    }
)