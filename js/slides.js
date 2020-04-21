var isOver = true;
var styleSheet = document.styleSheets[0];

function updateMouse(is){
  isOver = is;
}

//handles if you have slides in the negatives
if(current == slidesNum){
  for (var i = 0; i < styleSheet.rules.length; i++) {
    // if you are looking for selector '.main'
    if (styleSheet.rules[i].selectorText === '#next::before') {
      styleSheet.rules[i].style.color = '#797979';
      styleSheet.rules[i].style.cursor = 'default';
    }
  }
}
if(current == lowest){
  for (var i = 0; i < styleSheet.rules.length; i++) {
    // if you are looking for selector '.main'
    if (styleSheet.rules[i].selectorText === '#back::before') {
      styleSheet.rules[i].style.color = '#797979';
      styleSheet.rules[i].style.cursor = 'default';
    }
  }
}
var slds = document.getElementsByClassName("slides");
window.addEventListener('wheel', function(event)
{
  if(isOver){
    if (event.deltaY < 0){ changePage(-1); }
    else if (event.deltaY > 0) { changePage(1); }
  }
});

var inProgress = false;
function changePage(direction){
    if(inProgress)
      return;

    inProgress = true;
    var bar = document.getElementById("progress");

    if(direction > 0 && current != slidesNum){
      const start = current;
      current = current + 1;
      const next = current;

      //Animations!!
      const nextNode = document.querySelector(".s" + next);

      nextNode.classList.add('animated', 'bounceInLeft');
      nextNode.style.display = "block";

      animateCSS(".s" + start, "fadeOutUpBig",  function() {
        test(".s" + start);
      });


      //Progress Bar controll
      var width = (current-1)/(slidesNum-1);
      width = width * 100;
      bar.style.width = width + "%";
    }else if(direction < 0 && current != lowest){

      const start = current;
      current = current - 1;
      const next = current;

      const nextNode = document.querySelector(".s" + next);

      nextNode.classList.add('animated', 'bounceInLeft');
      nextNode.style.display = "block";

      animateCSS(".s" + start, "fadeOutUpBig",  function() {
        test(".s" + start);
      });



      var width = (current-1)/(slidesNum-1);
      width = width * 100;
      bar.style.width = width + "%";
    }

    if(current == slidesNum){
      for (var i = 0; i < styleSheet.rules.length; i++) {
        // if you are looking for selector '.main'
        if (styleSheet.rules[i].selectorText === '#next::before') {
          styleSheet.rules[i].style.color = '#797979';
          styleSheet.rules[i].style.cursor = 'default';
        }
      }
    }else{
      for (var i = 0; i < styleSheet.rules.length; i++) {
        // if you are looking for selector '.main'
        if (styleSheet.rules[i].selectorText === '#next::before') {
          styleSheet.rules[i].style.color = 'white';
          styleSheet.rules[i].style.cursor = 'pointer';
        }
      }
    }
    if(current == lowest){
      for (var i = 0; i < styleSheet.rules.length; i++) {
        // if you are looking for selector '.main'
        if (styleSheet.rules[i].selectorText === '#back::before') {
          styleSheet.rules[i].style.color = '#797979';
          styleSheet.rules[i].style.cursor = 'default';
        }
      }
    }else{
      for (var i = 0; i < styleSheet.rules.length; i++) {
        // if you are looking for selector '.main'
        if (styleSheet.rules[i].selectorText === '#back::before') {
          styleSheet.rules[i].style.color = 'white';
          styleSheet.rules[i].style.cursor = 'pointer';
        }
      }
    }
}
function test(first){
  const node1 = document.querySelector(first);
  node1.style.display = "none";
  inProgress = false;
}
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}
