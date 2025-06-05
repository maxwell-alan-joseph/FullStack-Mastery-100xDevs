/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function byWait(ms) {
    return new Promise((resolve) => {
        let startTime = new Date().getTime();
        while( new Date().getTime() < startTime + ms);
        resolve();
    });
}   

console.log("start");
byWait(3000).then ( () => console.log("Done after 3 seconds (busy wait)"));
