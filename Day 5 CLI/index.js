/*create a command line interface (CLI)
that let's user specify a file path and the nodejs process 
counts the numbers of words in the file inside it*/

const fs = require ('fs');
const { Command } = require('commander');
const program = new Command();

program 
    .name('counter')
    .description('CLI tool for file based tasks')
    .version('0.3.0')

program.command('count_words')
    .description('cli for counting words')
    .argument('<file>', 'file to count')
    .action( (file) => {
        fs.readFile (file, "utf-8", function(err, data) {
    if(err){
        return console.log("file can't be read");
    }else{
        const words = data.split(" ").length;
        console.log(`There are ${words + 1} words in ${file}`);
    }
    });
});


program.command('count_sentences')
    .description('cli for counting sentences')
    .argument('<file>', 'file to count')
    .action( (file) => {
        fs.readFile(file, "utf-8", function(err,data){
            if(err){
                return console.log("file not read");
            }else{
                const sentences = data.split('\n').length;
                console.log(`There are ${sentences} sentences in ${file}`);
            }
        });
    });

program.parse(process.argv);