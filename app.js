require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
// const { mostrarMenu, pausa } = require("./helpers/message");
console.clear();

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";

  do {
    opt = await inquirerMenu();
    await pausa();
  } while (opt !== "0");
};

main();
