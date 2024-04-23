import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
const app = express();

// Configurar Express para servir archivos estáticos de React
app.use(express.static(path.join(__dirname, 'build')));

// Ruta para servir la aplicación React
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'), 
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar con la base de datos', err);
  } else {
    console.log('Conexión exitosa con la base de datos');
  }
});

// Puerto en el que escucha el servidor Express
const port = process.env.DB_PORT || 3300;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
