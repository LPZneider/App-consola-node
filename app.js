require("colors");

const { inquirerMenu, pausa, readInput } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/Tasks");
// const { mostrarMenu, pausa } = require("./helpers/message");
// console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const tasksDB = readDB();
  if (tasksDB) {
    // establecemos
    tasks.LoadTasksFromArray(tasksDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        // crear opcion
        const desc = await readInput("Descripción de la tarea");
        tasks.createTask(desc);
        break;
      case "2":
        // crear
        // console.log(tasks.listadoArr());
        tasks.listComplete();
        break;
      case "3":
        tasks.IsCompleteTask();
        // crear
        break;
      case "4":
        tasks.IsCompleteTask(false);
        // crear
        break;
      case "5":
        // crear
        break;
      case "6":
        // crear
        break;
    }
    saveDB(tasks.listadoArr());

    await pausa();
  } while (opt !== "0");
};

main();
