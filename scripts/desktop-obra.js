function addClickEvent(id, url, openInNewWindow = false) {
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

function addPopupClickEvent(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", function () {
      var popup = document.getElementById("desktopPopUp");
      if (!popup) return;
      var popupStyle = popup.style;
      if (popupStyle) {
        popupStyle.display = "flex";
        popupStyle.zIndex = 100;
        popupStyle.backgroundColor = "rgba(128, 128, 128, 0.7)";
        popupStyle.alignItems = "center";
        popupStyle.justifyContent = "center";
      }
      popup.setAttribute("closable", "");

      var onClick =
        popup.onClick ||
        function (e) {
          if (e.target === popup && popup.hasAttribute("closable")) {
            popupStyle.display = "none";
          }
        };
      popup.addEventListener("click", onClick);
    });
  }
}


addClickEvent("popupmasterPrimaryButton", "./desktop-compra.html");
addClickEvent("popupmasterPrimaryButton1", "./desktop-obra.html");
addClickEvent("homeText", "./index.html");
addClickEvent("aboutText", "./desktop-about-us.html");
addClickEvent("contactText", "./desktop-contactos.html");

addPopupClickEvent("buttonSeleccionar");
addPopupClickEvent("buttonSeleccionar1");
addPopupClickEvent("buttonSeleccionar2");

addClickEvent("linkContainer", "./index.html");
addClickEvent("linkContainer1", "./desktop-about-us.html");
addClickEvent("linkContainer2", "./desktop-contactos.html");

addClickEvent("socialMediaIconSquare", "https://www.facebook.com/", true);
addClickEvent("socialMediaContainer", "https://www.instagram.com/",true);
addClickEvent("socialMediaIconSquare1", "https://twitter.com/",true);
