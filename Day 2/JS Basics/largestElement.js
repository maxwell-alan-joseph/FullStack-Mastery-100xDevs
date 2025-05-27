function largestElement(numbers){
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++){
        if(numbers[i] > max)
            max = numbers[i];
    }
    return max; 
}

console.log(largestElement([1, 3, 5, 6, 76, 61, -9, 90]));