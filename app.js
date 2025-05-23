const express = require('express');
const app = express();

const {infoCurso} = require('./curso.js')

app.get('/', (req,res) => {
    res.send('mi primer servidor. cursos 🐱‍👤')
})

// DELETE: Eliminar curso de inglés por ID
routerIngles.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = infoCurso.ingles.findIndex(curso => curso.id === id);

  if (indice === -1) {
    return res.status(404).send('Curso no encontrado.');
  }

  const cursoEliminado = infoCurso.ingles.splice(indice, 1);
  res.json(cursoEliminado);
});

app.put('/:id', (req, res) => {
    const tema_actualizado = req.body.tema;
    const id = req.params.id;

    cursos.programacion[1].tema = tema_actualizado;
    

});

const PUERTO = process.env.PORT || 3000;


app.listen(PUERTO, () => {
    console.log('el servidor esta iniciando procesos en el puerto ${PUERTO}...')
});