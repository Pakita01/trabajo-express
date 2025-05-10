const express = require('express');
const app = express();

const {infoCurso} = require('./curso.js')

app.get('/', (req,res) => {
    res.send('mi primer servidor. cursos 🐱‍👤')
})

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log('el servidor esta iniciando procesos en el puerto ${PUERTO}...')
});