const express = require('express');
const router = express.Router(); 
const { infoCurso } = require('../assets/cursos/curso'); // Se importa el objeto infoCurso con los cursos

// GET: Obtener todos los cursos de programación (endpoint echo por gustavo)
router.get('/', (req, res) => {
    // Devuelve el arreglo completo de cursos de programación en formato JSON
    res.json(infoCurso.programacion);
});

// GET: Obtener un curso de programación por ID (endpoint echo por gustavo)
router.get('/:id', (req, res) => {
    // Obtiene el ID desde los parámetros de la URL
    const id = parseInt(req.params.id);
    // Busca el curso con ese ID
    const curso = infoCurso.programacion.find(curso => curso.id === id);
    if (!curso) {
        // Si no existe, responde con 404
        return res.status(404).send('Curso no encontrado.');
    }
    // Si existe, lo devuelve en formato JSON
    res.json(curso);
});

// GET: Cursos de programación por lenguaje (endpoint echo por gustavo)
router.get('/lenguaje/:lenguaje', (req, res) => {
    // Obtiene el lenguaje desde los parámetros de la URL
    const lenguaje = req.params.lenguaje;
    // Filtra los cursos por el lenguaje especificado (ignorando mayúsculas/minúsculas)
    const cursosPorLenguaje = infoCurso.programacion.filter(curso => curso.lenguaje.toLowerCase() === lenguaje.toLowerCase());
    if (cursosPorLenguaje.length === 0) {   
        // Si no hay cursos, responde con 404
        return res.status(404).send(`No se encontraron cursos de programación en ${lenguaje}.`);
    }
    // Devuelve los cursos encontrados
    res.json(cursosPorLenguaje);
});

// GET: Cursos de programación por nivel (endpoint echo por gustavo)
router.get('/nivel/:nivel', (req, res) => {
    // Obtiene el nivel desde los parámetros de la URL
    const nivel = req.params.nivel;
    // Filtra los cursos por el nivel especificado
    const cursosPorNivel = infoCurso.programacion.filter(curso => curso.nivel.toLowerCase() === nivel.toLowerCase());
    if (cursosPorNivel.length === 0) {
        // Si no hay cursos, responde con 404
        return res.status(404).send(`No se encontraron cursos de programación de nivel ${nivel}.`);
    }
    // Devuelve los cursos encontrados
    res.json(cursosPorNivel);
});

// GET: Cursos de programación por vistas mínimas (endpoint echo por gustavo)
router.get('/vistas/:vistas', (req, res) => {
    // Obtiene el número mínimo de vistas desde los parámetros de la URL
    const vistas = parseInt(req.params.vistas);
    // Filtra los cursos que tengan al menos ese número de vistas
    const cursosPorVistas = infoCurso.programacion.filter(curso => curso.vistas >= vistas);
    if (cursosPorVistas.length === 0) {
        // Si no hay cursos, responde con 404
        return res.status(404).send(`No se encontraron cursos de programación con al menos ${vistas} vistas.`);
    }
    // Devuelve los cursos encontrados
    res.json(cursosPorVistas);
});

// POST: Crear nuevo curso de programación (endpoint echo por gustavo)
router.post('/', (req, res) => {
    // Obtiene el nuevo curso del cuerpo de la petición
    const nuevoCurso = req.body;
    // Valida que todos los campos requeridos estén presentes
    if (!nuevoCurso || !nuevoCurso.titulo || !nuevoCurso.lenguaje || !nuevoCurso.vistas || !nuevoCurso.nivel) {
        return res.status(400).send('Datos del curso incompletos.');
    }
    // Asigna un nuevo ID al curso
    nuevoCurso.id = infoCurso.programacion.length + 1;
    // Agrega el nuevo curso al arreglo
    infoCurso.programacion.push(nuevoCurso);
    // Devuelve el curso creado con status 201
    res.status(201).json(nuevoCurso);
});

// PUT: Actualizar un curso de programación por ID (actualiza id, titulo, lenguaje, vistas y nivel)
router.put('/:id', (req, res) => {
    // Obtiene el ID del curso a actualizar
    const id = parseInt(req.params.id);
    // Busca el curso con ese ID
    const curso = infoCurso.programacion.find(curso => curso.id === id);
    if (!curso) {
        // Si no existe, responde con 404
        return res.status(404).send('Curso no encontrado.');
    }
    // Obtiene los nuevos datos del cuerpo de la petición
    const { id: nuevoId, titulo, lenguaje, vistas, nivel } = req.body;

    // Actualiza los campos si se proporcionan en el body
    if (nuevoId !== undefined) curso.id = nuevoId;
    if (titulo !== undefined) curso.titulo = titulo;
    if (lenguaje !== undefined) curso.lenguaje = lenguaje;
    if (vistas !== undefined) curso.vistas = vistas;
    if (nivel !== undefined) curso.nivel = nivel;

    // Devuelve el curso actualizado
    res.json(curso);
});

// DELETE: Eliminar curso de programación por ID (endpoint echo por gustavo)
router.delete('/:id', (req, res) => {
    // Obtiene el ID del curso a eliminar
    const id = parseInt(req.params.id);
    // Busca el índice del curso
    const indice = infoCurso.programacion.findIndex(curso => curso.id === id);
    if (indice === -1) {
        // Si no existe, responde con 404
        return res.status(404).send('Curso no encontrado.');
    }
    // Elimina el curso del arreglo y lo devuelve
    const cursoEliminado = infoCurso.programacion.splice(indice, 1);
    res.json(cursoEliminado);
});

// Exporta el router para usarlo en app.js
module.exports = router;