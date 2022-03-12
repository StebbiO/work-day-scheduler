
var date = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var hourBlock = $(".hour");
var time = parseInt(moment().format("H"));



var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(textInput));
}

$(".saveBtn").on("click", function() {
    
})


$(hourBlock).each(function(i, hour) {
    // get id of each hour
    var hourTimeEl = parseInt($(this).attr("id"));

    // assign the div element in the same row as the corresponding hour block a class depending on where it falls in comparison to the current time
    if (hourTimeEl === time) {
        $(this).next().addClass("present")
    }
    else if (hourTimeEl > time) {
        $(this).next().addClass("future")
    }
    else if (hourTimeEl < time) {
        $(this).next().addClass("past")
    }
});

var loadTasks = function() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {

        }
    }
}

$(".col-8").on("click", "textarea", function() {
    $(this).addClass("form-control");
});

$(".col-8").on("blur", "textarea", function() {
    $(this).removeClass("form-control");
})
