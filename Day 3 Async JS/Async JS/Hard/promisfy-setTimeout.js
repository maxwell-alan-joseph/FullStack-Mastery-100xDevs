/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function setTimeoutpromisified(duration){
    return new Promise (function (resolve){
        setTimeout(resolve, duration);
    });
}


function wait(n){
    console.log(n + " seconds have passed");
}

setTimeoutpromisified(6000).then(wait (6));