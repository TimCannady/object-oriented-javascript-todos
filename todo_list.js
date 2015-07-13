function search_by_task(task, task_array){
     for (var i=0; i < task_array.length; i++) {
         if (task_array[i] === task) {
             return i;
         }
     }
 }

function Task(item_name, tasks_counter) {
  this.id = tasks_counter
  this.description = item_name;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
}

function TodoList() {
  this.tasks = [];
  this.tasks_counter = 1
};

TodoList.prototype.add = function(item_name) {
  this.tasks.push(new Task(item_name, this.tasks_counter));
  this.tasks_counter ++;
}
TodoList.prototype.list = function() {
  this.tasks.forEach(function (value, index){
    console.log(value)
  })
}

TodoList.prototype.remove = function(task_object) {
  var index = search_by_task(task_object, this.tasks);
  this.tasks.splice(index,1);
}



// Driver code
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
