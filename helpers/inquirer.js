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
        name: `${"1.".green} crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  // console.clear();
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
const a = "asdasd";

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};
module.exports = {
  inquirerMenu,
  pausa,
  readInput,
};
