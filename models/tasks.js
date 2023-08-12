const Task = require("./task");
const colors = require("colors");
function Tasks() {
  this._listado = new Map();
}

Tasks.prototype.listadoArr = function () {
  const listado = Array.from(this._listado, function (entry) {
    return entry[1];
  });

  return listado;
};

Tasks.prototype.LoadTasksFromArray = function (tasks = []) {
  const tasksMap = tasks.reduce((taskMap, value) => {
    return taskMap.set(value.id, value);
  }, new Map());

  this._listado = tasksMap;
};

Tasks.prototype.createTask = function (desc = "") {
  const tarea = new Task(desc);
  this._listado.set(tarea.id, tarea);
};

Tasks.prototype.listComplete = function () {
  this.listadoArr().forEach((task, index) => {
    console.log(
      `${colors.green(index + 1 + ".")} ${task.desc} :${
        task.completeIn ? ": Completada".green : ": Pendiente".red
      }`
    );
  });
};

Tasks.prototype.IsCompleteTask = function (isComplete = true) {
  let tasks = [];
  isComplete
    ? (tasks = this.listadoArr().filter((task) => task.completeIn))
    : (tasks = this.listadoArr().filter((task) => !task.completeIn));

  tasks.forEach((task, index) => {
    console.log(
      `${colors.green(index + 1 + ".")} ${task.desc} :: ${
        task.completeIn ? task.completeIn.green : "Pendiente".red
      }`
    );
  });
};

Tasks.prototype.deleteTask = function (id = "") {
  this._listado.delete(id);
};

Tasks.prototype.toggleComplete = function (ids = []) {
  ids.forEach((id) => {
    const task = this._listado.get(id);
    if (!task.completeIn) {
      task.completeIn = new Date().toISOString();
    }
  });

  this.listadoArr().forEach((task) => {
    if (!ids.includes(task.id)) {
      this._listado.set(task.id, { ...task, completeIn: null });
    }
  });
};
module.exports = Tasks;
