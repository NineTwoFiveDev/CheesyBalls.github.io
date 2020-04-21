
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++){
    if(!slides[i].classList.contains("s" + current)){
      slides[i].style.display = "none";
    }
  }
