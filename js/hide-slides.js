
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++){
    if(slides[i].id != current){
      slides[i].style.display = "none";
    }
  }
