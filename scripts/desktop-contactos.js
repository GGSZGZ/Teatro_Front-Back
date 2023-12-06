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

addClickEvent("linkContainer", "./index.html", false);
addClickEvent("linkContainer1", "./desktop-about-us.html", false);

addClickEvent("socialMediaIconSquare", "https://www.facebook.com/", true);
addClickEvent("socialMediaContainer", "https://www.instagram.com/", true);
addClickEvent("socialMediaIconSquare1", "https://twitter.com/", true);

addClickEvent("homeText1", "./index.html", false);
addClickEvent("aboutText1", "./desktop-about-us.html", false);



//evento boton para recogida de datos
document.getElementById("send-message").addEventListener("click",()=>{
  var name=document.getElementById("Nombre").value;
  var mail=document.getElementById("Email").value;
  var telephone=document.getElementById("Telephone").value;
  var direction=document.getElementById("Location").value;
  var message=document.getElementById("textarea").value;
  if(name=="" || mail==""|| telephone==""||direction==""){
    alert("Por favor rellene todos los campos obligatorios");
  }else{
    //mandar datos json
    //vacio los campos del form
    document.getElementById("formulario").reset();
  }
});





