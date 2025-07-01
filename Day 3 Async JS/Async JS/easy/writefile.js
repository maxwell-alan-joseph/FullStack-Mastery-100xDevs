

const fs = require('fs');

fs.writeFile("a.txt","new content into the file", "utf-8", function(err) {
    if (err){
        console.log("File not updated");
    }else {
        fs.readFile("a.txt", "utf-8", function (err, data){
            if(err){
                console.log("file not read");
            }else {
                console.log("Updated file contents " + data);
            }
        });
    }
});