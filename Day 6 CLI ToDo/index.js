/* FileSystem based todo list 
Create a cli that lets a user 
- add a todo 
- delete a todo
- mark a todo as done  
store all the data in files (todo.json)*/

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const FILE_PATH = 'todo.json';

//add logic

program
    .name('todo')
    .description('CLI that lets the user to add, delete, mark a todo as done')
    .version('0.1.0');

program.command('add')
    .description('add a new todo')
    .argument('<task>', 'task to add')
    .action ((task) => {
        if (fs.existsSync(FILE_PATH)) {
            const data = fs.readFileSync(FILE_PATH, 'utf-8');
            todos = JSON.parse(data);
        }

        const newID = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

        const newTodo = {
            id: newID,
            task: task,
            done: false
        };

        todos.push(newTodo);

        fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf-8');
        
        console.log(`Added todo: ${task}`);
    });

program.command('done')
    .description('marking a todo as done')
    .argument('<id>', 'ID of the todo to mark as done')
    .action((id) => {
        const todoId = parseInt(id);
        
        if(!fs.existsSync(FILE_PATH)) {
            console.log("No todos found here");
            return;
        }

        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        let todos = JSON.parse(data);

        const index = todos.findIndex(todo => todo.id === todoId);

        if (index === -1 ){
            console.log(`No todo found with ID: ${todoId}`);
            return;
        }

        if (todos[index].done){
            console.log(`Todo [${todoId}] ia already marked as done`);
            return;
        }

        todos[index].done = true;
        fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf-8');
        console.log(`Marked todo [${todoId}] as ✅done.`);
    });

program.command('delete')
    .description('delete a specific todo')
    .argument('<id>', 'id to delete')
    .action ((id) => {
        if (!fs.existsSync(FILE_PATH)) {
            console.log("No todos to delete.");
            return;
        }

        const data = fs.readFileSync(FILE_PATH, "utf-8");
        let todos = JSON.parse(data);

        const intialLength = todos.length;
        todos = todos.filter(todo => todo.id != parseInt(id));

        if (todos.length === intialLength) {
            console.log(`No todo found with the ID ${id}`);
            return;
        }

        fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf-8');
        console.log(`Deleted todo with the ID: ${id}`);
    });

program.command('list')
    .description('list all the todos')
    .action(() => {
        if (!fs.existsSync(FILE_PATH)) {
            console.log("No todos found here.");
            return;
        }

        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        const todos = JSON.parse(data);

        if (todos.length === 0 ){
            console.log("No todos found");
            return;
        }

        todos.forEach(todo => {
            const status = todo.done ? '✅' : '❌';
            console.log(`${status} [${todo.id} ${todo.task}]`);
        });
    });
program.parse();