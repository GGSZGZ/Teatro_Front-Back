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

//calendario
document.addEventListener("DOMContentLoaded", function () {
  var actual = new Date();
  var year = actual.getFullYear();
  var month = actual.getMonth() + 1;

  mostrarCalendario(year, month);

  function mostrarCalendario(year, month) {
    var now = new Date(year, month - 1, 1);
    var ultimoDiaMes = new Date(year, month, 0).getDate();
    var primerDiaSemana = now.getDay() === 0 ? 7 : now.getDay();

    var dia = 0;
    var resultado = "<tr bgcolor='silver'>";

    var last_cell = primerDiaSemana + ultimoDiaMes;

    // Nombres de los días de la semana
    var diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    for (var i = 1; i <= 42; i++) {
      if (i === primerDiaSemana) {
        dia = 1;
      }

      if (i < primerDiaSemana || i >= last_cell) {
        resultado += "<td>&nbsp;</td>";
      } else {
        var fecha = new Date(year, month - 1, dia);
        var nombreDia = diasSemana[fecha.getDay()];
        if (dia === actual.getDate() && month === actual.getMonth() + 1 && year === actual.getFullYear())
          resultado += "<td class='hoy'>" + nombreDia + " " + dia + "</td>";
        else
          resultado += "<td>" + nombreDia + " " + dia + "</td>";
        dia++;
      }

      if (i % 7 === 0) {
        if (dia > ultimoDiaMes)
          break;
        resultado += "</tr><tr>\n";
      }
    }
    resultado += "</tr>";

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = "<div>" + meses[month - 1] + " / " + year + "</div>";
    document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
  }
});




