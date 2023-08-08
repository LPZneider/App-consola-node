const inquirer = require("inquirer");

require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. crear tarea",
      },
      {
        value: "2",
        name: "2. listar tareas",
      },
      {
        value: "3",
        name: "3. listar tareas completadas",
      },
      {
        value: "4",
        name: "4. listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. completar tarea(s)",
      },
      {
        value: "6",
        name: "6. borrar tarea",
      },
      {
        value: "0",
        name: "0. salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("============================".green);
  console.log("   Seleccione una opción".green);
  console.log("============================\n".green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pausa = async () => {
  const pause = await inquirer.prompt([
    {
      type: "input",
      message: `\nPresione ${"ENTER".blue} para continuar.\n`,
      name: "enter",
    },
  ]);
  return pause;
};
module.exports = {
  inquirerMenu,
  pausa,
};
