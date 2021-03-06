window.onload = function () {

  /*           // When the user clicks the button, close the sidebar 
            function toggleNav() {

              var sidebar = document.getElementById('sidebar');
              var button = document.getElementById("toggleBtn");
              var main = document.getElementById("top");
              var toggleBtn = document.getElementById('toggleBtn');

              button.onclick = function () {
                toggleBtn.blur(); 

                if (sidebar.style.visibility == "visible") {
                  sidebar.style.visibility = "collapse";
                  main.style.width = "100%";
                  toggleBtn.style.left = "0";
                } else {
                  sidebar.style.visibility = "visible";
                  main.style.width = "80%";
                  toggleBtn.style.left = "20%";
                }
              }
            }

            toggleNav(); */



  // Viewport Animation BODY ONLOAD
  var animateHTML = function () {
    var elements;
    var windowHeight;

    //Grabbing the sections and return the Window's Height
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }

    // Loop through sections remove hidden attriubte, add fade-in
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
  }();



  //Scrolling Animation
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


/*
  //Modal for popups
  function modal() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  modal();
*/

}