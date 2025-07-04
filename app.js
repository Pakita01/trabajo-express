const express = require('express');
const app = express()
const {infoCurso} = require('./assets/cursos/curso'); // Importa el objeto infoCurso desde cursos.js
const { json } = require('body-parser');
app.use(express.json());

const programacionRouter = require('./routes/programacion');
app.use('/programacion', programacionRouter);

app.get('/', (req, res) => {
    res.send('mi primer servidor. cursos 🐱‍👤');
});










const routerIngles = express.router();
app.use('/api/cursos/ingles', routerIngles)

// GET: Todos los cursos de inglés
routerIngles.get('/', (req, res) => {
  res.json(infoCurso.ingles);
});

// GET: Cursos de inglés por grado
routerIngles.get('/:grado', (req, res) => {
  const grado = req.params.grado;
  const resultados = infoCurso.ingles.filter(curso => curso.grado === grado);
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de inglés de grado ${grado}.`);
  }
  res.json(resultados);
});

// POST: Añadir nuevo curso de inglés
routerIngles.post('/', (req, res) => {
  const nuevoCurso = req.body;

  if (!validarCurso(nuevoCurso)) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  if (infoCurso.ingles.some(curso => curso.id === nuevoCurso.id)) {
    return res.status(409).json({ error: "El ID ya existe" });
  }
app.use(express.json());
  infoCurso.ingles.push(nuevoCurso);
  res.status(201).json(nuevoCurso);
});

// PUT: Actualizar curso de inglés por ID
routerIngles.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cursoActualizado = req.body;

  if (Object.keys(cursoActualizado).length === 0) {
    return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
  }

  const indice = infoCurso.ingles.findIndex(curso => curso.id === id);
  if (indice === -1) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  infoCurso.ingles[indice] = { ...infoCurso.ingles[indice], ...cursoActualizado };
  res.json(infoCurso.ingles[indice]);
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
