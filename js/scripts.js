function Task(name) {
  this.name = name;

}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {

    var inputName = $("input#new-task-name").val();
    var newTask = new Task(inputName);

    $("ul#tasks").append("<li id=" + newTask.name + "><span class= 'taskName'>" + newTask.name +  "</span></li>");

    $("input#new-task-name").val("");

    $(# + newTask.name).click(function() {
      // $("#show-tasks").show();
    });


    event.preventDefault();


  });


});
