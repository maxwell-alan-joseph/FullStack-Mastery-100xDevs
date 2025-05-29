/* Counter without setInterval
Without using setInterval, try to code a counter in Javascript.*/

let count = 0;

function counter(){
    count++;
    console.log(count);

    setTimeout(counter, 1000);
};
counter();