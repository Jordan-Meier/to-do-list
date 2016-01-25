function Task(name) {
  this.name = name;

}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {

    var inputName = $("input#new-task-name").val();
    var newTask = new Task(inputName);
    var newId = newTask.name.replace(/\s/g, '');
    var newId = newId.replace(/[.,\/#!$%\^&\*;:'{}=\-_`~()]/g, '');


    $("ul#tasks").append("<li id='" + newId + "'><span class= 'taskName'>" + newTask.name +  "</span></li>");

    $("input#new-task-name").val("");

    $("#" + newId).click(function() {
      $("#" + newId).hide();
      $("ul#completedTask").append("<li id='" + newId + "'><span class= 'taskName'>" + newTask.name +  "</span></li>");
    });


    event.preventDefault();
  });
});
