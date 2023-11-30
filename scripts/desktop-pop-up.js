function addPopupClickEvent(buttonId, url) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", function () {
      window.location.href = url;
    });
  }
}

addPopupClickEvent("popupmasterPrimaryButton", "./desktop-compra.html");
addPopupClickEvent("popupmasterPrimaryButton1", "./desktop-obra.html");
