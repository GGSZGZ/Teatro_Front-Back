const express = require('express');
const { faker }=require('@faker-js/faker')
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let tickets = [];
let contacts = [];

// let listObras="El Cascanueces,El novio de España,Cuento de Navidad,Don Juan Tenorio,Mayumana Impulso,Animales de Compañia,Camino al Zoo,Bodas de Sangre,El Rey Que Fue,Romeo y Julieta,La Celestina,Fausto";

//detalle de la obra
// var obraData = "La historia toma lugar en Sevilla, durante el Siglo de Oro. Un año después de realizar una apuesta para ver quién podría ser más malvado y mujeriego, don Juan Tenorio y don Luis Mejía se reúnen en el Hostal del Laurel para comparar sus hazañas. Tras contar los muertos en riñas y duelos y las mujeres seducidas, don Juan se proclama vencedor. Los rivales deciden retarse en una nueva apuesta. Don Juan asegura a don Luis que le arrebatará a su prometida, doña Ana de Pantoja y que, además, conquistará a una novicia a punto de tomar los votos. Enterado del desafío, el Comendador don Gonzalo de Ulloa, padre de doña Inés, quien permanece en un convento destinada a casarse con don Juan, niega su consentimiento y deshace el compromiso. Don Juan le escribe una carta de amor a doña Inés y posteriormente la rapta del convento, donde vivía desde la infancia. Finalmente, ambos se enamoran. Don Luis y don Gonzalo llegan a la casa de don Juan, se enfrentan a él y mueren a manos de Tenorio, por lo que este huye a Italia.";

// app.get('/obra', (req, res) => {
//   res.send(obraData);
// });


let obras=[];

app.get('/listObras', (req, res) => {
  res.send(obras);
});

app.post('/listObras', (req, res) =>{
  const obra = req.body;
  const id = obra.idObraSubir;
  const asientos = obra.cantAsientosOcupados;
  for(let i = 0; i<12; i++){
    if(id==obras[i].idObra){
      obras[i].asientos = asientos;
    }
  }
});
app.get('/sinopsis', (req, res) => {
  res.send(obras.map((obra) => obra.sinopsis));
});
//obras
function init(){
  for(let i =0;i<12;i++){
    obras.push({
          idObra:(i+1),
          avatarUrl: faker.image.avatar() ,
          title: faker.lorem.words(1),
          descripcion : faker.lorem.paragraph(),
          sinopsis: faker.lorem.paragraphs(5),
          asientos: []
      })
  }
}

app.get('/tickets', (req, res) => {
  res.send(tickets);
});

// Ruta para manejar los datos del formulario
app.post('/tickets', (req, res) => {
  // Recibir datos del formulario desde el cuerpo de la solicitud
  const userData = req.body;

  // Validar que se han proporcionado los datos necesarios
  if (!userData || !userData.name || !userData.surname || !userData.mail || !userData.direction || !userData.telephone || !userData.payment) {
    return res.status(400).json({ error: 'Todos los campos del formulario son obligatorios.' });
  }

  // Almacenar los datos en el array tickets
  tickets.push(userData);

  // Enviar una respuesta al cliente
  res.status(201).json({ message: 'User created successfully' });
});

app.get('/contact', (req, res) => {
  res.send(contacts);
});

app.post('/contact', (req, res) => {
  // Recibir datos del formulario desde el cuerpo de la solicitud
  const contactData = req.body;

  // Validar que se han proporcionado los datos necesarios
  if (!contactData || !contactData.name || !contactData.mail || !contactData.direction || !contactData.telephone) {
    return res.status(400).json({ error: 'Todos los campos del formulario son obligatorios.' });
  }

  // Almacenar los datos en el array tickets
  contacts.push(contactData);

  // Enviar una respuesta al cliente
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  init();
});
