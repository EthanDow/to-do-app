// check off specific to-dos by clicking 

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});


// selecting the span and click on X to delete todo elements 

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});


// creating new todo elements 

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {

        //grabing new to do text from input 
        var todoText = $(this).val();
        $(this).val("");

        // create a new li and add to ul 

        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

// selct plus icon and toggle the list

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});