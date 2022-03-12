
var date = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var hourBlock = $(".hour");
var now = parseInt(moment().format("H"));



var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(textInput));
}

$(".saveBtn").on("click", function() {

})


