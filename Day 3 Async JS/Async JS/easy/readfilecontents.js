/*Reading the contents of a file
Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. */


const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data){
    if (err){
        console.log("file not found!");
    }else {
        console.log(data);
    }
});