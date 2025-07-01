/* function that calculates the time in seconds given the input*/

function calculateTime(n){
    const start=performance.now();
    let sum = 0; 
    for (let i=1; i<=n; i++){
        sum += i; 
    }

    const end=performance.now()

    return (end - start) / 1000 ;
}

console.log("Time taken for sum 1 to 100" + calculateTime(100));
console.log("Time taken for sum 1 to 100000" + calculateTime(100000));
console.log("Time taken for sum 1 to 100000000" + calculateTime(100000000));