//  Modulos
const express = require('express')
const path = require('path')
const bandera = require('./leer-archivos')

//  Inicializando Express
const app = express()


//  Configuraciones
app.set('appName','Modulo BackEnd')
let port = proccess.env.PORT || 8000;


//  Rutas
app.get('/inicio', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/login.html'))
})
app.get('/nosotros', (req, res) => {
  bandera()
  res.sendFile(path.resolve(__dirname, './contador.txt'))
})
app.get('/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/register.html'))
})
app.get('/restablecer-contrasena', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/forgot-password.html'))
})


//  Midelware
app.use(express.static('public'))
app.use( (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/404.html'))
})


//  Escucha de puerto
app.listen(port, () => {
  console.log(app.get('appName'));
  console.log(`Escuchando en --> http://localhost:${port}`)
})

