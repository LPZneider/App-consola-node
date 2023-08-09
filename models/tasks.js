const Task = require("./task");

function Tasks() {
  this._listado = new Map();
}

Tasks.prototype.listadoArr = function () {
  const listado = Array.from(this._listado, function (entry) {
    return entry[1];
  });

  return listado;
};

Tasks.prototype.createTask = function (desc = "") {
  const tarea = new Task(desc);
  this._listado.set(tarea.id, tarea);
};
module.exports = Tasks;
