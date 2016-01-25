describe('Task', function() {
  it("creates a new task with the given properties", function () {
    var testTask = new Task("laundry", "3:30", "very important", ["get detergent", "seperate colors", "fold clothes"]);

    expect(testTask.name).to.equal("laundry");
    expect(testTask.deadline).to.equal("3:30");
    expect(testTask.importance).to.equal("very important");
    expect(testTask.toDo).to.eql(["get detergent", "seperate colors", "fold clothes"]);
  });
});
