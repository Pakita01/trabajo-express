const express = require('express');
const app = express()
const {infoCurso} = require('./curso.js');
const { json } = require('body-parser');
app.use(express.json());


app.get('/', (req, res) => {
    res.send('mi primer servidor. cursos 🐱‍👤');
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

//programacion

/* function enviarCursoProgramacion () {
    const CursoProgramacion = {
        id: 3,
            titulo: 'aprende python avanzado',
            lenguaje: 'python',
            vistas: 34567,
            nivel: 'avanzado' 
    };
    fetch("http://programacion.com/api/curso", {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(CursoProgramacion)

    })
    .then(response => response.json())
    .then(data => {
        console.log("curso enviado:", data);
    })
    .catch(error => {
        console.error("error:", error);
    })
    
}
enviarCursoProgramacion()// */

// PUT: Actualizar tema de un curso de programación por ID
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
