var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


$(".btn").on("click", function() {

    console.log("did i work");   
    var textValue = $(this).parent().siblings(".form-control").val();
    var id = $(this).parent().parent().attr("id")
    localStorage.setItem(id, textValue);
    
});


$("#text-9").val(localStorage.getItem("hour-9"));
$("#text-10").val(localStorage.getItem("hour-10"));
$("#text-11").val(localStorage.getItem("hour-11"));
$("#text-12").val(localStorage.getItem("hour-12"));
$("#text-1").val(localStorage.getItem("hour-1"));
$("#text-2").val(localStorage.getItem("hour-2"));
$("#text-3").val(localStorage.getItem("hour-3"));
$("#text-4").val(localStorage.getItem("hour-4"));
$("#text-5").val(localStorage.getItem("hour-5"));




