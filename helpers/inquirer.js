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
  console.clear();
  console.log("============================".green);
  console.log("   Seleccione una opción ".green);
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

const listTasksDelete = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
    };
  });
  choices.unshift({
    value: "0",
    name: "0.".green + " Cancelar",
  });
  const questions = [
    {
      type: "list",
      name: "id",
      message: "¿Que desea eliminar?",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

const comfirm = async (message) => {
  const questions = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(questions);
  return ok;
};

const listTasksCheck = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
      checked: task.completeIn ? true : false,
    };
  });

  const question = [
    {
      type: "checkbox",
      name: "ids",
      message: "Selecciones",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(question);

  return ids;
};
module.exports = {
  inquirerMenu,
  pausa,
  readInput,
  listTasksDelete,
  comfirm,
  listTasksCheck,
};
