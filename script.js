var input = $("#new-item-input")
var clearButton = $("#clear-button")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("List", valueToSave);
  }
})

clearButton.click(function(e) {	
  deleteValue("List")
})

onNewListItem("List", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 