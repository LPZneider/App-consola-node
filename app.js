require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tasks = require("./models/Tasks");
const Task = require("./models/task");
// const { mostrarMenu, pausa } = require("./helpers/message");
console.clear();

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";

  do {
    const task = new Task("comprar comida");
    // opt = await inquirerMenu();

    const adaptTask = new Map();
    adaptTask.set(task.id, task);

    const tasks = new Tasks(adaptTask);

    console.log(tasks);

    await pausa();
  } while (opt !== "0");
};

main();
