#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["jaweriya", "maheen"];
async function createTodo(list) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: chalk.blue("select an operation"),
            name: "select",
            choices: ["Add", "Update", "Delete", "View", "Exit"]
        });
        if (answer.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: chalk.yellow("what do you want to add"),
                name: "todo"
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (answer.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: chalk.green("update item in the list"),
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: chalk.red("what do you want to add"),
                name: "todo"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (answer.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: chalk.yellowBright("delete item in the list"),
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (answer.select == "View"){
            console.log("******TODO LIST******");
            todos.forEach(todo => console.log(todo));
            //console.log(todos)
        }
        if (answer.select == "Exit") {
            console.log("exiting");
            process.exit(0);
        }
    } while (true);
}
createTodo(todos);
