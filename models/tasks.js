const Task = require("./task");

function Tasks() {
  this._listado = new Map();
}

Tasks.prototype.listadoArr = function () {
  const listado = [];

  // Object.keys(this._listado).forEach((key) => {
  //   console.log(key);
  // });

  return console.log("holaaaaaaaaaaaaaaa");
};

Tasks.prototype.createTask = function (desc = "") {
  const tarea = new Task(desc);
  this._listado.set(tarea.id, tarea);
};
module.exports = Tasks;
