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

let idObraClick = 0;
document.addEventListener('DOMContentLoaded', function () {
  // Agregar eventListener a cada elemento con id que sigue el patrón "card-i"
  for (let i = 1; i <= 12; i++) {
      let elementId = 'card-' + i;
      let element = document.getElementById(elementId);

      if (element) {
          element.addEventListener('click', function () {
              idObraClick=i;
              localStorage.setItem('idObra', idObraClick);
          });
      }
  }
});

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

const listObra = document.querySelector("#calendar");
// Realizar la solicitud GET al servidor
let listadoRespuesta=[];
fetch("http://localhost:3000/listObras", {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     }
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => {
      construirHome(data);
      
     })
     .catch((error) => {
       console.error(error);
     });

     function construirHome(data){

      for (var i = 0; i < data.length; i++) {
        // Obtén el elemento por su ID
        var title = document.getElementById("title-" + (i+1));
        title.textContent=data[i].title.toUpperCase();
        var desc = document.getElementById("description-" + (i+1));
        desc.textContent=data[i].descripcion;
        var img = document.getElementById("img-" + (i+1));
        img.src=data[i].avatarUrl;
    }
     }



//calendario

  
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
        
       
        const obraAleatoria=listadoRespuesta[Math.round(Math.random()*10+1)];
        var fecha = new Date(year, month - 1, dia);
        var nombreDia = diasSemana[fecha.getDay()];
        if (dia === actual.getDate() && month === actual.getMonth() + 1 && year === actual.getFullYear())
        
          resultado += "<td class='hoy'>" + nombreDia + " " + dia +" "+"</td>";
        else
          resultado += "<td>" + nombreDia + " " + dia +" "+ "</td>";
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








