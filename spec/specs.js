describe('Task', function() {
  it("creates a new task with the given properties", function () {
    var testTask = new Task("laundry");

    expect(testTask.name).to.equal("laundry");

  });
});
