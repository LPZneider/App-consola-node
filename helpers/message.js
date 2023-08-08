require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("============================".green);
    console.log("   Seleccione una opción".green);
    console.log("============================\n".green);
    console.log(`${"1".cyan}. crear tarea`);
    console.log(`${"2".cyan}. listar tareas`);
    console.log(`${"3".cyan}. listar tareas completadas`);
    console.log(`${"4".cyan}. listar tareas pendientes`);
    console.log(`${"5".cyan}. completar tarea(s)`);
    console.log(`${"6".cyan}. borrar tarea`);
    console.log(`${"0".cyan}. Salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion ", (opt) => {
      resolve(opt);
      readline.close();
    });
  });
};
const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`\nPresione ${"ENTER".blue} para continuar.\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
