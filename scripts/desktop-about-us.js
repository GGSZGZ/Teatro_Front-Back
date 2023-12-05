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
addClickEvent("linkContainer2", "./desktop-contactos.html", false);
addClickEvent("socialMediaIconSquare", "https://www.facebook.com/", true);
addClickEvent("socialMediaContainer", "https://www.instagram.com/", true);
addClickEvent("socialMediaIconSquare1", "https://twitter.com/", true);
addClickEvent("homeText1", "./index.html", false);
addClickEvent("contactText1", "./desktop-contactos.html", false);
addClickEvent("send-message", "./index.html", false);
