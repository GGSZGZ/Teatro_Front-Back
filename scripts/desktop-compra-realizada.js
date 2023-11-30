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

addClickEvent("homeText", "./index.html", false);
addClickEvent("aboutText", "./desktop-about-us.html", false);
addClickEvent("contactText", "./desktop-contactos.html", false);
