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
  
// Función para crear la sala de cine
function crearSalaDeCine(filas, columnas) {
  var salaCine = document.getElementById('sala-cine');
  var cantidad = document.getElementById('cantidad');
  var precio = document.getElementById('importe');
  var importe;

  for (var fila = 1; fila <= filas; fila++) {
      for (var columna = 1; columna <= columnas; columna++) {
          var asiento = document.createElement('div');
          asiento.classList.add('asiento');
          asiento.textContent = fila + '-' + columna;

          // Simulando algunos asientos ocupados
          if (fila === 2 && columna === 3 || fila === 4 && columna === 5 || fila === 6 && columna === 1) {
              asiento.classList.add('asiento-ocupado');
          }

          salaCine.appendChild(asiento);

          asiento.addEventListener('click', function () {
              if (!this.classList.contains('asiento-ocupado')) {
                  this.classList.toggle('asiento-seleccionado');
                  // Extraer el número de fila y columna del texto del asiento
                  var numeroAsiento = this.textContent;
                  var numeroFila = parseInt(numeroAsiento.charAt(0));
                  var numeroColumna = parseInt(numeroAsiento.charAt(2));

                  var asientosSeleccionadosImage = document.querySelectorAll('.asiento-seleccionado');
                  if (asientosSeleccionadosImage.length > 6) {
                      alert('¡Ya has seleccionado el máximo de 6 asientos!');
                      this.classList.remove('asiento-seleccionado'); // Deshacer la selección del asiento actual
                      return;
                  }
                  // Mostrar la información en la consola (puedes cambiar esto según tus necesidades
                  var asientosSeleccionados = document.getElementById('asientosSeleccionados');   
                  var filasExistentes = asientosSeleccionados.getElementsByTagName('tr');
                  var filaExistente = Array.from(filasExistentes).find(function (fila) {
                      return fila.cells[0].textContent.includes(numeroFila) && fila.cells[1].textContent.includes(numeroColumna);
                  });
                  if (filaExistente) {
                    // Si la fila existe, eliminarla de la tabla
                    asientosSeleccionados.removeChild(filaExistente);
                    importe -= 25;
                    cantidad.textContent = "ENTRADAS SELECCIONADAS: "+asientosSeleccionadosImage.length;
                    precio.textContent = "IMPORTE TOTAL: "+importe+ "€";
                } else {
                    var nuevaFila = asientosSeleccionados.insertRow();
                    var filas = nuevaFila.insertCell(0);
                    var columnas = nuevaFila.insertCell(1);
                    filas.textContent = numeroFila;
                    columnas.textContent = numeroColumna;
                    cantidad.textContent = "ENTRADAS SELECCIONADAS: "+asientosSeleccionadosImage.length;
                    precio.textContent = "IMPORTE TOTAL: "+asientosSeleccionadosImage.length*25+ "€";
                    importe = asientosSeleccionadosImage.length*25;
                }
            }
          });
      }
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

// Llama a la función para crear la sala de cine
crearSalaDeCine(6, 6);
