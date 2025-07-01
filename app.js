const express = require('express');
const app = express();//rea una instancia de la aplicación Express

const {infoCurso} = require('./curso.js')//importa un objeto llamado infoCurso desde un archivo local llamado curso.js

// Define una ruta GET para la raíz del servidor (/)
app.get('/', (req,res) => {
    res.send('mi primer servidor. cursos 🐱‍👤')
})
//(req, res) => { ... }: Es una función de callback que 
// se ejecuta cuando se recibe una petición. 
// req es el objeto de la petición (contiene datos de la solicitud del cliente) 
// y res es el objeto de la respuesta (para enviar datos al cliente).

// Router para inglés
const routerIngles = express.Router();
app.use('/api/cursos/ingles', routerIngles);

// GET: Todos los cursos de inglés
routerIngles.get('/', (req, res) => {
  res.json(infoCurso.ingles);//Envía el arreglo completo de cursos de inglés (asumiendo que infoCurso.ingles es un arreglo) 
  // como una respuesta JSON al cliente.
});

// GET: Cursos de inglés por grado
// para obtener cursos de inglés filtrados por un grado específico. La URL sería algo como GET /api/ingles/basico o GET /api/ingles/avanzado.
routerIngles.get('/:grado', (req, res) => {
  const grado = req.params.grado;//Extrae el valor del parámetro grado de la URL.
  const resultados = infoCurso.ingles.filter(curso => curso.grado === grado);//Filtra el arreglo infoCurso.ingles para encontrar solo los cursos cuyo grado coincida con el valor extraído.
  if (resultados.length === 0) {//Si no se encuentran cursos con ese grado, envía una respuesta con estado HTTP 404 (No Encontrado) y un mensaje.
    return res.status(404).send(`No se encontraron cursos de inglés de grado ${grado}.`);
  }
  res.json(resultados);
});

// Las solicitudes POST se usan para enviar datos al servidor para crear un nuevo recurso. La URL sería POST /api/ingles.
// POST: Añadir nuevo curso de inglés
routerIngles.post('/', (req, res) => {
  const nuevoCurso = req.body;//Extrae el cuerpo de la petición (los datos enviados por el cliente, generalmente en formato JSON) y lo asigna a nuevoCurso

  if (!validarCurso(nuevoCurso)) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  if (infoCurso.ingles.some(curso => curso.id === nuevoCurso.id)) {
    return res.status(409).json({ error: "El ID ya existe" });
  }//Usa el método some() para comprobar si al menos un curso en el arreglo infoCurso.ingles tiene el mismo id que nuevoCurso.

  app.use(express.json());//middleware para parsear JSON
  infoCurso.ingles.push(nuevoCurso);//Agrega el objeto nuevoCurso al final del arreglo infoCurso.ingles.
  res.status(201).json(nuevoCurso);//Envía una respuesta con estado HTTP 201 (Created) y el objeto del curso recién creado en formato JSON.
});

// PUT: Actualizar curso de inglés por ID
routerIngles.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);//Extrae el ID de la URL y lo convierte a un número entero (ya que los parámetros de URL son cadenas de texto).
  const cursoActualizado = req.body;// Obtiene los datos de actualización del cuerpo de la petición.

  if (Object.keys(cursoActualizado).length === 0) {//Si está vacío, devuelve un error 400.
    return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
  }

  const indice = infoCurso.ingles.findIndex(curso => curso.id === id);
  if (indice === -1) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  infoCurso.ingles[indice] = { ...infoCurso.ingles[indice], ...cursoActualizado };//Crea un nuevo objeto que combina las propiedades del curso existente 
  res.json(infoCurso.ingles[indice]);// Envía el curso actualizado como respuesta JSON.
});

// DELETE: Eliminar curso de inglés por ID
routerIngles.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);//extrae y convierte el ID de la URL.
  const indice = infoCurso.ingles.findIndex(curso => curso.id === id);//Busca el índice del curso a eliminar.

  if (indice === -1) {
    return res.status(404).send('Curso no encontrado.');
  }

  const cursoEliminado = infoCurso.ingles.splice(indice, 1);// El método splice() elimina elementos de un arreglo. Aquí, elimina 1 elemento a partir del indice encontrado. 
  res.json(cursoEliminado);
});

app.put('/:id', (req, res) => {
    const tema_actualizado = req.body.tema;//Obtiene el valor de la propiedad tema del cuerpo de la petición.
    const id = req.params.id;// Obtiene el ID de la URL, aunque no se usa para buscar el curso.

    cursos.programacion[1].tema = tema_actualizado;//Actualiza directamente la propiedad tema del segundo elemento (índice 1) del arreglo 
    

});

const PUERTO = process.env.PORT || 3000;


app.listen(PUERTO, () => {
    console.log('el servidor esta iniciando procesos en el puerto ${PUERTO}...')
});