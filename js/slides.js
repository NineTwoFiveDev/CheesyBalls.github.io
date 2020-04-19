
      var styleSheet = document.styleSheets[0];

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
      function changePage(direction){
          var cur = document.getElementById(current);
          var bar = document.getElementById("progress");
          var next;
          if(direction > 0 && current != slidesNum){
            current = current + 1;
            next = document.getElementById(current);
            cur.style.display = "none";
            next.style.display = "block";
            var width = (current-1)/(slidesNum-1);
            width = width * 100;
            bar.style.width = width + "%";
          }else if(direction < 0 && current != lowest){
            current = current - 1;
            next = document.getElementById(current);
            cur.style.display = "none";
            next.style.display = "block";
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
