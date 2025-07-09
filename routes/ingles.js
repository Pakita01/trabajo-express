const express = require('express');
const router = express.Router();
// Se importa el objeto infoCurso con los cursos (asumiendo que tiene una propiedad 'ingles')
const { infoCurso } = require('../assets/cursos/curso');

// GET: Obtener todos los cursos de inglés
router.get('/', (req, res) => {
    // Devuelve el arreglo completo de cursos de inglés en formato JSON
    res.json(infoCurso.ingles);
});

// GET: Obtener un curso de inglés por ID
router.get('/:id', (req, res) => {
    // Obtiene el ID desde los parámetros de la URL
    const id = parseInt(req.params.id);
    // Busca el curso con ese ID
    const curso = infoCurso.ingles.find(curso => curso.id === id);
    if (!curso) {
        // Si no existe, responde con 404
        return res.status(404).send('Curso de inglés no encontrado.');
    }
    // Si existe, lo devuelve en formato JSON
    res.json(curso);
});

// GET: Cursos de inglés por grado (ej. principio, intermedio, avanzado)
router.get('/grado/:grado', (req, res) => {
    // Obtiene el grado desde los parámetros de la URL
    const grado = req.params.grado;
    // Filtra los cursos por el grado especificado (ignorando mayúsculas/minúsculas)
    const cursosPorGrado = infoCurso.ingles.filter(curso => curso.grado.toLowerCase() === grado.toLowerCase());
    if (cursosPorGrado.length === 0) {
        // Si no hay cursos, responde con 404
        return res.status(404).send(`No se encontraron cursos de inglés de grado ${grado}.`);
    }
    // Devuelve los cursos encontrados
    res.json(cursosPorGrado);
});

// GET: Cursos de inglés por nivel
router.get('/nivel/:nivel', (req, res) => {
    // Obtiene el nivel desde los parámetros de la URL
    const nivel = req.params.nivel;
    // Filtra los cursos por el nivel especificado
    const cursosPorNivel = infoCurso.ingles.filter(curso => curso.nivel.toLowerCase() === nivel.toLowerCase());
    if (cursosPorNivel.length === 0) {
        // Si no hay cursos, responde con 404
        return res.status(404).send(`No se encontraron cursos de inglés de nivel ${nivel}.`);
    }
    // Devuelve los cursos encontrados
    res.json(cursosPorNivel);
});

// GET: Cursos de inglés por vistas mínimas
router.get('/vistas/:vistas', (req, res) => {
    // Obtiene el número mínimo de vistas desde los parámetros de la URL
    const vistas = parseInt(req.params.vistas);
    // Filtra los cursos que tengan al menos ese número de vistas
    const cursosPorVistas = infoCurso.ingles.filter(curso => curso.vistas >= vistas);
    if (cursosPorVistas.length === 0) {
        // Si no hay cursos, responde con 404
        return res.status(404).send(`No se encontraron cursos de inglés con al menos ${vistas} vistas.`);
    }
    // Devuelve los cursos encontrados
    res.json(cursosPorVistas);
});

// POST: Crear nuevo curso de inglés
router.post('/', (req, res) => {
    // Obtiene el nuevo curso del cuerpo de la petición
    const nuevoCurso = req.body;
    // Valida que todos los campos requeridos estén presentes
    if (!nuevoCurso || !nuevoCurso.titulo || !nuevoCurso.grado || !nuevoCurso.vistas || !nuevoCurso.nivel) {
        return res.status(400).send('Datos del curso de inglés incompletos.');
    }
    // Asigna un nuevo ID al curso
    nuevoCurso.id = infoCurso.ingles.length + 1;
    // Agrega el nuevo curso al arreglo
    infoCurso.ingles.push(nuevoCurso);
    // Devuelve el curso creado con status 201
    res.status(201).json(nuevoCurso);
});

// PUT: Actualizar un curso de inglés por ID (actualiza id, titulo, grado, vistas y nivel)
router.put('/:id', (req, res) => {
    // Obtiene el ID del curso a actualizar
    const id = parseInt(req.params.id);
    // Busca el curso con ese ID
    const curso = infoCurso.ingles.find(curso => curso.id === id);
    if (!curso) {
        // Si no existe, responde con 404
        return res.status(404).send('Curso de inglés no encontrado.');
    }
    // Obtiene los nuevos datos del cuerpo de la petición
    const { id: nuevoId, titulo, grado, vistas, nivel } = req.body;

    // Actualiza los campos si se proporcionan en el body
    if (titulo !== undefined) curso.titulo = titulo;
    if (grado !== undefined) curso.grado = grado;
    if (vistas !== undefined) curso.vistas = vistas;
    if (nivel !== undefined) curso.nivel = nivel;

    // Devuelve el curso actualizado
    res.json(curso);
});

// DELETE: Eliminar curso de inglés por ID
router.delete('/:id', (req, res) => {
    // Obtiene el ID del curso a eliminar
    const id = parseInt(req.params.id);
    // Busca el índice del curso
    const indice = infoCurso.ingles.findIndex(curso => curso.id === id);
    if (indice === -1) {
        // Si no existe, responde con 404
        return res.status(404).send('Curso de inglés no encontrado.');
    }
    // Elimina el curso del arreglo y lo devuelve
    const cursoEliminado = infoCurso.ingles.splice(indice, 1);
    res.json(cursoEliminado);
});

// Exporta el router para usarlo en app.js
module.exports = router;
