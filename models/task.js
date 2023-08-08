const { v4: uuidv4 } = require("uuid");

function Task(desc) {
  this.id = uuidv4();
  this.desc = desc;
  this.completeIn = null;
}

module.exports = Task;
