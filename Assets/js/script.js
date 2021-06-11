// Displays date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//save button
$(".btn").on("click", function() {

    console.log("did i work");   
    var textValue = $(this).parent().siblings(".form-control").val();
    var id = $(this).parent().parent().attr("id")
    localStorage.setItem(id, textValue);
    
});

//background color of text
function bgColor() {
    //current time
    var currentTime = moment().hour(); 
    //grabbing the textarea
    var textHour = document.getElementsByTagName("textarea");   

    console.log(textHour);
    console.log(currentTime);

    //if statements for each time block that colors the bg with 
    //past, present, or future style
    if (currentTime > 9) {
        $("#9").addClass("past");
    } else if (currentTime >= 9 && currentTime < 10) {
        $("#9").addClass("present");
    } else {
        $("#9").addClass("future");
    };

    if (currentTime > 10) {
        $("#10").addClass("past");
    } else if (currentTime >= 10 && currentTime < 11) {
        $("#10").addClass("present");
    } else {
        $("#10").addClass("future");
    };

    if (currentTime > 11) {
        $("#11").addClass("past");
    } else if (currentTime >= 11 && currentTime < 12) {
        $("#11").addClass("present");
    } else {
        $("#11").addClass("future");
    };

    if (currentTime > 12) {
        $("#12").addClass("past");
    } else if (currentTime >= 12 && currentTime < 13) {
        $("#12").addClass("present");
    } else {
        $("#12").addClass("future");
    };

    if (currentTime > 13) {
        $("#13").addClass("past");
    } else if (currentTime >= 13 && currentTime < 14) {
        $("#13").addClass("present");
    } else {
        $("#13").addClass("future");
    };

    if (currentTime > 14) {
        $("#14").addClass("past");
    } else if (currentTime >= 14 && currentTime < 15) {
        $("#14").addClass("present");
    } else {
        $("#14").addClass("future");
    };

    if (currentTime > 15) {
        $("#15").addClass("past");
    } else if (currentTime >= 15 && currentTime < 16) {
        $("#15").addClass("present");
    } else {
        $("#15").addClass("future");
    };

    if (currentTime > 16) {
        $("#16").addClass("past");
    } else if (currentTime >= 16 && currentTime < 17) {
        $("#16").addClass("present");
    } else {
        $("#16").addClass("future");
    };

    if (currentTime > 17) {
        $("#17").addClass("past");
    } else if (currentTime >= 17 && currentTime < 18) {
        $("#17").addClass("present");
    } else {
        $("#17").addClass("future");
    };

   
};

bgColor();
//local storage
$("#9").val(localStorage.getItem("hour-9"));
$("#10").val(localStorage.getItem("hour-10"));
$("#11").val(localStorage.getItem("hour-11"));
$("#12").val(localStorage.getItem("hour-12"));
$("#13").val(localStorage.getItem("hour-1"));
$("#14").val(localStorage.getItem("hour-2"));
$("#15").val(localStorage.getItem("hour-3"));
$("#16").val(localStorage.getItem("hour-4"));
$("#17").val(localStorage.getItem("hour-5"));




