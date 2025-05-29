const fs = require('fs');


fs.readFile ("b.txt", "utf-8", function(err, data){
    if (err){
        console.log("issue with the file, file cannot be read")
    }else {
        let cleanFile = data.replace(/\s+/g, ' ').trim();

        fs.writeFile("b.txt", cleanFile, "utf-8", function(err,data){
            if (err){
                console.log("file not updated")
            }else {
                fs.readFile ("b.txt", "utf-8", function(err, data){
                    if(err){
                        console.log("file not read");
                    }else{
                        console.log("This is the updated file " + data);
                    }
                })
            }
        })
    }
});