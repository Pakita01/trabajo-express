// Importa el módulo Express para crear el servidor.
const express = require('express');

// Importa el objeto infoCurso desde el archivo local curso.js.
const { infoCurso } = require('./curso.js');

// Crea una instancia de la aplicación Express.
const app = express();

// Middleware para parsear el cuerpo de las peticiones en formato JSON.
app.use(express.json());
const { json } = require('body-parser');

// Ruta principal: Responde con un mensaje de bienvenida.
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi servidor de cursos! 📚');
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

// --- Endpoints para Cursos de Inglés (Pakita)---

// GET: Obtener todos los cursos de inglés.
app.get('/ingles', (req, res) => {
    // Envía la lista completa de cursos de inglés como respuesta JSON.
    res.json(infoCurso.ingles);
});

// GET: Obtener específicamente un curso de inglés por ID.
app.get('/ingles/:id', (req, res) => {
    // Convierte el ID de la URL a un número entero.
    const id = parseInt(req.params.id);
    // Busca el curso en el arreglo de cursos de inglés por su ID.
    const curso = infoCurso.ingles.find(curso => curso.id === id);

    // Si el curso no se encuentra, envía una respuesta 404.
    if (!curso) {
        return res.status(404).send('Curso de inglés no encontrado.');
    }
    // Si se encuentra, envía el curso como respuesta JSON.
    res.json(curso);
});

// POST: Crear un nuevo curso de inglés.
app.post('/ingles', (req, res) => {
    // Obtiene los datos del nuevo curso del cuerpo de la petición.
    const nuevoCurso = req.body;

    // Valida que los datos esenciales del curso estén presentes.
    if (!nuevoCurso || !nuevoCurso.titulo || !nuevoCurso.idioma || !nuevoCurso.vistas || !nuevoCurso.nivel) {
        return res.status(400).send('Datos del curso incompletos. Se requieren título, idioma, vistas y nivel.');
    }

    // Asigna un nuevo ID al curso (basado en la longitud actual del arreglo + 1).
    nuevoCurso.id = infoCurso.ingles.length + 1;
    // Agrega el nuevo curso al arreglo de cursos de inglés.
    infoCurso.ingles.push(nuevoCurso);

    // Envía el curso creado con un estado 201 (Creado) como respuesta JSON.
    res.status(201).json(nuevoCurso);
});


// PUT: Actualizar completamente un curso de inglés por ID.
app.put('/ingles/:id', (req, res) => {
    // Obtiene los datos actualizados del curso del cuerpo de la petición.
    const cursoActualizado = req.body;
    // Convierte el ID de la URL a un número entero.
    const id = parseInt(req.params.id);

    // Busca el índice del curso con ese ID en el arreglo de cursos de inglés.
    const indice = infoCurso.ingles.findIndex(curso => curso.id === id);

    // Si el curso no se encuentra, envía una respuesta 404.
    if (indice === -1) {
        return res.status(404).send('Curso de inglés no encontrado para actualizar.');
    }

    // Actualiza el curso completo en el arreglo, manteniendo el mismo ID.
    infoCurso.ingles[indice] = { ...cursoActualizado, id: id };

    // Envía el curso actualizado como respuesta JSON.
    res.json(infoCurso.ingles[indice]);
});

// PATCH: Actualizar parcialmente un curso de inglés por ID (ej. solo el nivel).
app.patch('/ingles/:id', (req, res) => {
    // Obtiene los campos a actualizar del cuerpo de la petición.
    const camposActualizados = req.body;
    // Convierte el ID de la URL a un número entero.
    const id = parseInt(req.params.id);

    // Busca el curso en el arreglo de cursos de inglés por su ID.
    const curso = infoCurso.ingles.find(curso => curso.id === id);

    // Si el curso no se encuentra, envía una respuesta 404.
    if (!curso) {
        return res.status(404).send('Curso de inglés no encontrado para actualización parcial.');
    }

    // Itera sobre los campos proporcionados en la petición y actualiza el curso.
    for (const propiedad in camposActualizados) {
        curso[propiedad] = camposActualizados[propiedad];
    }

    // Envía el curso actualizado como respuesta JSON.
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

// DELETE: Eliminar un curso de inglés por ID.
app.delete('/ingles/:id', (req, res) => {
    // Convierte el ID de la URL a un número entero.
    const id = parseInt(req.params.id);
    // Busca el índice del curso con ese ID en el arreglo de cursos de inglés.
    const indice = infoCurso.ingles.findIndex(curso => curso.id === id);

    // Si el curso no se encuentra, envía una respuesta 404.
    if (indice === -1) {
        return res.status(404).send('Curso de inglés no encontrado para eliminar.');
    }

    // Elimina el curso del arreglo y guarda el curso eliminado.
    const cursoEliminado = infoCurso.ingles.splice(indice, 1);
    // Envía el curso eliminado como respuesta JSON.
    res.json(cursoEliminado);
});

// Define el puerto en el que el servidor escuchará.
const PUERTO = process.env.PORT || 3000;


// Inicia el servidor y lo pone a escuchar en el puerto especificado.
app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);

});
