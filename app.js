const express = require('express');
const app = express();
const {infoCurso} = require('./assets/cursos/curso'); // Importa el objeto infoCurso desde cursos.js
const { json } = require('body-parser');
app.use(express.json());

const programacionRouter = require('./routes/programacion');
app.use('/api/curso/programacion', programacionRouter);


const inglesRouter = require('./routes/ingles');
app.use('/api/curso/ingles', inglesRouter);

const matematicaRouter = require('./routes/matematica'); 
app.use('/api/curso/matematica', matematicaRouter); 


app.get('/', (req, res) => {
    res.send('mi primer servidor. cursos 🐱‍👤');
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`el servidor esta iniciando procesos en el puerto ${PUERTO}...`);
});
