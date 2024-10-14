// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Script for avoiding #'s in URL when clicking navbar.

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajusta el desplazamiento según el tamaño de tu encabezado
            behavior: 'smooth'
        });
    });
});

// Función para copiar el número al portapapeles

function copyToClipboard(elementId) {
  // Selecciona el elemento que contiene el número
  var phoneNumber = document.getElementById(elementId).textContent;
  
  // Crea un campo de texto temporal
  var tempInput = document.createElement("input");
  tempInput.value = phoneNumber;
  document.body.appendChild(tempInput);
  
  // Selecciona y copia el contenido
  tempInput.select();
  document.execCommand("copy");
  
  // Elimina el campo de texto temporal
  document.body.removeChild(tempInput);
  
   // Muestra la notificación suave
   var notification = document.getElementById("notification-"+elementId.slice(-1));
   notification.style.display = "block";
   
   // Desaparece la notificación después de 3 segundos
   setTimeout(function() {
       notification.style.display = "none";
   }, 3000);
}