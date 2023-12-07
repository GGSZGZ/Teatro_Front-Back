const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let tickets = [];
let contacts = [];

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
  console.log(`Example app listening on port ${port}`);
});
