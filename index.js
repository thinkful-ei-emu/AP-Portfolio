//will need autoscroll fxn and tags and marking

$(".jumper").on("click", function(event) {
    
    event.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});

var slideIndex = [1, 1, 1];
var slideId = ["rmhSlides", "srSlides", "carSlides"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(2, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}