
var date = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var hourBlock = $(".hour");
var time = parseInt(moment().format("H"));
console.log(time)

if(time == 1){
    for(let i=0;i<18;i++){
        localStorage.setItem(i,"")
    }
}


$(".saveBtn").on("click", function() {
    var userText = $(this).siblings(".col-8").children("textarea").val();
    var timeBlock = $(this).siblings(".col-2").attr("id");
    console.log(userText, timeBlock);
    localStorage.setItem(timeBlock, userText);
})


$(hourBlock).each(function(i, hour) {
    // get id of each hour
    var hourTimeEl = parseInt($(this).attr("id"));
    var userEntry = localStorage.getItem(hourTimeEl)
    console.log(userEntry);
    $(this).next().children("textarea").val(userEntry);
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


$(".col-8").on("click", "textarea", function() {
    $(this).addClass("form-control");
});

$(".col-8").on("blur", "textarea", function() {
    $(this).removeClass("form-control");
})
