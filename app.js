const express = require('express');
const app = express()

const {infoCurso} = require('./curso.js');
const { json } = require('body-parser');

app.use(express.json)

app.get('/', (req,res) => {
    res.send('mi primer servidor. cursos 🐱‍👤')
})


//matematicas
function  enviarCursoMatematicas () {
    const CursoMatematicas ={
         id: 2,
            titulo: 'aprende algebra',
            tema: 'algebra',
            vistas: 15722,
            nivel: 'intermedio'
    }
    
    fetch("https://matematicas.com/api/cursos", {
        method: "POST",
        headers:{
            "content-type": "aplication/json"
        },
        body: json.stringfy(infoCurso)
    
    })
    .then(response => response.json())
    .then(data => {
        console.log("curso enviado", data);
    })

    .catch(error => {
        console.error("error:", error);
    })
}

enviarCursoMatematicas();

//programacion

function enviarCursoProgramacion () {
    const CursoProgramacion = {
        id: 3,
            titulo: 'aprende python avanzado',
            lenguaje: 'python',
            vistas: 34567,
            nivel: 'avanzado' 
    };
    fetch("https:/7programacion.com/api/curso", {
        method:"POST",
        headers: {
            "content-type": "aplication/json"
        },
        body:json.stringfy(CursoProgramacion)

    })
    .then(response => response.json())
    .then(data => {
        console.log("curso emnviado:", data);
    })
    .catch(error => {
        console.error("error:", error);
    })
    
}
enviarCursoProgramacion()

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log('el servidor esta iniciando procesos en el puerto ${PUERTO}...')
});