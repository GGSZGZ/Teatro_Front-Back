function addClickEvent(id, url, openNewWindow) {
  var element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      if (openNewWindow) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    });
  }
}

addClickEvent("about", "./desktop-about-us.html");
addClickEvent("contact", "./desktop-contactos.html");
addClickEvent("grip", "./desktop-obra.html");
addClickEvent("linkContainer13", "./desktop-about-us.html");
addClickEvent("linkContainer14", "./desktop-contactos.html");

var socialMediaLinks = {
  "socialMediaIconSquare": "https://www.facebook.com/",
  "socialMediaContainer": "https://www.instagram.com/",
  "socialMediaIconSquare1": "https://twitter.com/"
};

for (var id in socialMediaLinks) {
  addClickEvent(id, socialMediaLinks[id], true);
}

addClickEvent("carrusel", "./desktop-obra.html");
