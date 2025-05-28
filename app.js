const express = require('express');
const app = express();

app.use(express.json()); // <-- Necesario para leer req.body

const { infoCurso } = require('./curso.js');

app.get('/', (req, res) => {
    res.send('mi primer servidor. cursos 🐱‍👤');
});

// PUT: Actualizar tema de un curso de programación por ID
app.put('/programacion/:id', (req, res) => {
    const tema_actualizado = req.body.tema;
    const id = parseInt(req.params.id);

    const curso = infoCurso.programamacion.find(curso => curso.id === id);
    if (!curso) {
        return res.status(404).send('Curso no encontrado.');
    }
    curso.tema = tema_actualizado;
    res.json(curso);
});

// DELETE: Eliminar curso de inglés por ID
app.delete('/ingles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = infoCurso.ingles.findIndex(curso => curso.id === id);

    if (indice === -1) {
        return res.status(404).send('Curso no encontrado.');
    }

    const cursoEliminado = infoCurso.ingles.splice(indice, 1);
    res.json(cursoEliminado);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`el servidor esta iniciando procesos en el puerto ${PUERTO}...`);
});