//select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToogler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToogler.addEventListener('click', function (){
    body.classList.toggle('open');
});

//scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

var acc = document.getElementsByClassName("accordion-dropbtn");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var isActive = this.classList.contains("active");

    // Reset all buttons and panels
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      var panel = acc[j].nextElementSibling;
      panel.style.display = "none";
    }

    // Toggle active state for clicked button and panel
    if (!isActive) {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.display = "block";
    }
  });
}
