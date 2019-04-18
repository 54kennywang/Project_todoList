$("ul").on("click", "li", function(){
    $(this).toggleClass("finished");
});


$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if((event.which === 13) && ($(this).val() != "")){
        var newItem = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="far fa-trash-alt"></i></span> ' + newItem + '</li>');
    }
});
