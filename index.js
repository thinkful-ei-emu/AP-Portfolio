//will need autoscroll fxn and tags and marking

$(".jumper").on("click", function(event) {
    
    event.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});