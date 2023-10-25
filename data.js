let todos = [];

function addTodo(todos, name, passid, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    passid: passid,
    urgency: urgency
  };
  todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) {
    let task = null;
    for (let t of todos) {
      if (t.id == id) {
        task = t;
      }
    }
    if (task) {
      task.name = newTaskName;
      task.urgency = newUrgency;
    } else {
      console.log("Task is not found");
    }
  }