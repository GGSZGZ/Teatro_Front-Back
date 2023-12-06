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

document.getElementById("compraRealizadaContainer1").addEventListener("click",()=>{
  var name=document.getElementById("Nombre").value;
  var mail=document.getElementById("Correo").value;
  var telephone=document.getElementById("Tlf").value;
  var apellidos=document.getElementById("Apellidos").value;
  var direction=document.getElementById("Calle").value;
  var payment=document.getElementById("Payment").value;
  if(name=="" || mail==""|| telephone==""|| direction==""|| apellidos=="" ||payment==""){
    alert("Por favor rellene todos los campos obligatorios");
  }else{
    //mandar datos json
    //vacio los campos del form
    console.log("Nombre:"+name+", Apellidos:"+apellidos+", Correo:"+mail+", Dirección:"+direction+", Tlf:"+telephone+", Payment:"+payment)
    document.getElementById("form").reset();
    window.location.href = "./desktop-compra-realizada.html";
  }
});
