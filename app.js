const express = require('express');
const app = express()
const {infoCurso} = require('./curso.js');
const { json } = require('body-parser');
app.use(express.json());


app.get('/', (req, res) => {
    res.send('mi primer servidor. cursos 🐱‍👤');
});

// GET: Obtener todos los cursos de programación (endpoint echo por gustavo)
app.get('/programacion', (req, res) => {
    res.json(infoCurso.programacion);
});

// GET: obtener especificamente un curso de programación por ID (endpoint echo por gustavo)
app.get('/programacion/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const curso = infoCurso.programacion.find(curso => curso.id === id);
    if (!curso) {
        return res.status(404).send('Curso no encontrado.');
    }
    res.json(curso);
});

/* //matematicas
function  enviarCursoMatematicas () {
    const CursoMatematicas ={
         id: 2,
            titulo: 'aprende algebra',
            tema: 'algebra',
            vistas: 15722,
            nivel: 'intermedio'
    }
    
    fetch("http://matematicas.com/api/cursos", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(CursoMatematicas)
    
    })
    .then(response => response.json())
    .then(data => {
        console.log("curso enviado", data);
    })

    .catch(error => {
        console.error("error:", error);
    })
}

enviarCursoMatematicas(); */

// POST: Crear un nuevo curso de programación (echo por gustavo)
app.post('/programacion', (req, res) => {
    const nuevoCurso = req.body; // Obtiene el nuevo curso del cuerpo de la petición
    if (!nuevoCurso || !nuevoCurso.titulo || !nuevoCurso.lenguaje || !nuevoCurso.vistas || !nuevoCurso.nivel) {
        return res.status(400).send('Datos del curso incompletos.');
    }
    // Asigna un nuevo ID al curso
    nuevoCurso.id = infoCurso.programacion.length + 1;
    // Agrega el nuevo curso al arreglo de cursos de programación
    infoCurso.programacion.push(nuevoCurso);
    // Devuelve el curso creado como respuesta
    res.status(201).json(nuevoCurso);
});

// PUT: Actualizar tema de un curso de programación por ID (echo por gustavo)
app.put('/programacion/:id', (req, res) => {
    const tema_actualizado = req.body.tema; // Obtiene el nuevo tema del cuerpo de la petición
    const id = parseInt(req.params.id); // Obtiene el ID del curso desde la URL

    // Busca el curso con ese ID en el arreglo de cursos de programación
    const curso = infoCurso.programacion.find(curso => curso.id === id);
    if (!curso) {
        // Si no lo encuentra, responde con error 404
        return res.status(404).send('Curso no encontrado.');
    }
    // Si lo encuentra, actualiza el tema
    curso.tema = tema_actualizado;
    // Devuelve el curso actualizado como respuesta
    res.json(curso);
});

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

// delete: Eliminar curso de programación por ID (echo por gustavo)
app.delete('/programacion/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = infoCurso.programacion.findIndex(curso => curso.id === id);

    if (indice === -1) {
        return res.status(404).send('Curso no encontrado.');
    }

    const cursoEliminado = infoCurso.programacion.splice(indice, 1);
    res.json(cursoEliminado);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`el servidor esta iniciando procesos en el puerto ${PUERTO}...`);
});
