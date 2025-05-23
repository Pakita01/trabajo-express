const express = require('express');
const app = express();

const {infoCurso} = require('./curso.js')

app.get('/', (req,res) => {
    res.send('mi primer servidor. cursos 🐱‍👤')
})

app.put('/:id', (req, res) => {
    const tema_actualizado = req.body.tema;
    const id = req.params.id;

    cursos.programacion[1].tema = tema_actualizado;
    

});


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log('el servidor esta iniciando procesos en el puerto ${PUERTO}...')
});