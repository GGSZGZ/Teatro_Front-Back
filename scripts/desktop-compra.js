
function addClickEvent(id, url, openInNewWindow) {
  var element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      if (openInNewWindow) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    });
  }
}

addClickEvent("compraRealizadaContainer", "./desktop-obra.html", false);
addClickEvent("linkContainer", "./index.html", false);
addClickEvent("linkContainer1", "./desktop-about-us.html", false);
addClickEvent("linkContainer2", "./desktop-contactos.html", false);

addClickEvent("socialMediaIconSquare", "https://www.facebook.com/", true);
addClickEvent("socialMediaContainer", "https://www.instagram.com/", true);
addClickEvent("socialMediaIconSquare1", "https://twitter.com/", true);

addClickEvent("homeText1", "./index.html", false);
addClickEvent("aboutText1", "./desktop-about-us.html", false);
addClickEvent("contactText1", "./desktop-contactos.html", false);

var horario = localStorage.getItem('hora');
document.getElementById('horarioFin').textContent = horario;

var importe = localStorage.getItem('importe');
var cantidadAsientos = localStorage.getItem('cantidadAsientos');
var cantAsientosOcupados= localStorage.getItem('asientosOcupados');
var idObraSubir = localStorage.getItem('idObra');
importe +="€";
document.getElementById('importe').textContent = importe;
document.getElementById('cantidadAss').textContent = cantidadAsientos;



document.getElementById("compraRealizadaContainer1").addEventListener("click",()=>{
  var name=document.getElementById("Nombre").value;
  var mail=document.getElementById("Correo").value;
  var telephone=document.getElementById("Tlf").value;
  var surname=document.getElementById("Apellidos").value;
  var direction=document.getElementById("Calle").value;
  var payment=document.getElementById("Payment").value;
  if(name=="" || mail==""|| telephone==""|| direction==""|| surname=="" ||payment==""){
    alert("Por favor rellene todos los campos obligatorios");
  }else{
    // Construir objeto con los datos del formulario
    const userData = {
     name,
     surname,
     mail,
     direction,
     telephone,
     payment,
     horario,
     importe,
     cantidadAsientos,
   };
   const obra = {
    idObraSubir,
    cantAsientosOcupados,
   };
   // Realizar la solicitud POST al servidor
   fetch("http://localhost:3000/tickets", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(userData),
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => {
       console.log("Compra realizada con éxito:", data);
       // Realizar cualquier acción adicional después de una compra exitosa
       document.getElementById("form").reset(); // Vaciar los campos del formulario
       window.location.href = "./desktop-compra-realizada.html"; // Redirigir a la página de compra realizada
     })
     .catch((error) => {
       console.error("Error en la solicitud POST:", error);
     });
     //POST ASIENTOS
  fetch("http://localhost:3000/listObras", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(obra),
     })
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .catch((error) => {
       console.error("Error en la solicitud POST:", error);
     });
 }
});
