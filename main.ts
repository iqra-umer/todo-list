import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] =["jaweriya","maheen"];
async function createTodo(list :string[]){
do{
    let answer =await inquirer.prompt({
    type: "list",
    message: chalk.bgCyan("select an operation"),
    name: "select",
    choices: ["Add", "Update", "Delete", "View", "Exit"]
})
if (answer.select == "Add"){
let addTodo = await inquirer.prompt({
    type: "input",
    message: chalk.yellow("what do you want to add"),
    name: "todo"
})
todos.push(addTodo.todo);
todos.forEach(todo => console.log(todo));
//console.log(todos);
}

if(answer.select == "Update") { 
    let updateTodo = await inquirer.prompt({
        type:"list",
        message: chalk.bgGreen("update item in the list"),
        name: "todo",
        choices: todos.map(item => item)
    })
        let addTodo = await inquirer.prompt({
            type: "input",
            message: chalk.red("what do you want to add"),
            name: "todo"
     })
     let newTodo= todos.filter(val => val !== updateTodo.todo)
     todos = [...newTodo,addTodo.todo]
     todos.forEach(todo => console.log(todo));
     //console.log(todos);
    }
if(answer.select == "Delete") {
    let deleteTodo = await inquirer.prompt({
        type:"list",
        message: chalk.yellow("delete item in the list"),
        name: "todo",
        choices: todos.map(item => item)
    })
    let newTodo= todos.filter(val => val !== deleteTodo.todo)
    todos = [...newTodo]
    todos.forEach(todo => console.log(todo));
    //console.log(todos);
}
if(answer.select == chalk.bgBlue("View")) {
    console.log(chalk.grey("******TODO LIST******"))
    todos.forEach(todo => console.log(todo));
  //console.log(todos)
}
if(answer.select == chalk.bgYellow("Exit")){
    console.log("exiting")
    process.exit(0)
} 
} while(true);
}
    
createTodo(todos);