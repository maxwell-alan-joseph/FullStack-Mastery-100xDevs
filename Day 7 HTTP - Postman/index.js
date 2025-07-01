const fs = require('fs');
const express = require('express')
const app = express()

const File_Path = 'todo.json';
const PORT = 3000;

//home route 
app.get('/', (req, res) => {
    res.send('<h1><b>Your TODO Application</b></h1>');
});

//post => Create
app.post('/create', (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const parsed = JSON.parse(body);
            const task = parsed.task;

            if(!task){
                return res.status(400).send('Task is required');
            }

            let todos = [];
            if(fs.existsSync(File_Path)) {
                const data = fs.readFileSync(File_Path, 'utf-8');
                todos = JSON.parse(data);
            }

            const newId = todos.length > 0 ? Math.max(...todo.map(todo => todo.id)) + 1:1;
            
            const newTodo = {
                id: newId,
                task: task
            };
            todos.push(newTodo);
            fs.writeFileSync(File_Path, JSON.stringify(todos, null, 2), 'utf-8');

            res.status(201).send(`Todo added with the ID: ${newId}`);
        } catch (error) {
            res.status(400).send('invalid JSOn or internal error');
        }
    });
})

app.listen(PORT, () => {
    console.log(`server running at http:localhost:${PORT}`);
});