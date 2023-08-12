require("colors");

const {
  inquirerMenu,
  pausa,
  readInput,
  listTasksDelete,
  comfirm,
  listTasksCheck,
} = require("./helpers/inquirer");
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
        // crear tarea
        const desc = await readInput("Descripción de la tarea");
        tasks.createTask(desc);
        break;
      case "2":
        // ver todas las tareas
        tasks.listComplete();
        break;
      case "3":
        // tareas completadas
        tasks.IsCompleteTask();
        break;
      case "4":
        // tareas pendientes
        tasks.IsCompleteTask(false);
        break;
      case "5":
        // completar tarea(s)
        const checkTasks = await listTasksCheck(tasks.listadoArr());
        // console.log(checkTasks);
        tasks.toggleComplete(checkTasks);
        break;
      case "6":
        // borrar
        const id = await listTasksDelete(tasks.listadoArr());
        if (id === "0") continue;
        const ok = await comfirm("¿Estas seguro de borrar esta tarea?");
        if (ok) tasks.deleteTask(id);
        break;
    }
    saveDB(tasks.listadoArr());

    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
