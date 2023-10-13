function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function myFunction(){
   var open= window.open("about:blank","wrong password","width=200,height=200");
   open.document.write("wrong password");
  }

   // Get the button
   var scrollButton = document.getElementById("scrollButton");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           scrollButton.style.display = "block";
       } else {
           scrollButton.style.display = "none";
       }
   };

   // Scroll to the top of the document
   function scrollToTop() {
       document.body.scrollTop = 0; // For Safari
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
   }