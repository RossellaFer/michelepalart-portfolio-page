filterSelection("highlights")
 // Execute the function and the highlights section
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("block");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    addClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) removeClass(x[i], "hide");
  }
  //Trigger Masonry layout
  const $grid = $('.image-gallery').masonry({
    itemSelector: '.image-box',
    fitWidth: true,
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
}


function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

//Change color of the button according to the active class
var btnContainer = document.getElementById("portfolio-selection");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//The navbar becomes solid when the user scrolls

$(window).scroll(function() {
          // checks if window is scrolled more than 100px, adds/removes solid class and adds/removes hide class from navbar
          if($(this).scrollTop() > 100) { 
              $('.navbar').addClass('solid');
              $("#businessname").removeClass('hide');
            
          } else {
              $('.navbar').removeClass('solid');
              $("#businessname").addClass('hide');
          }

        });
