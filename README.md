# trabajo-express

descripcion: API REST para cursos academicos de matematica, programacion e idiomas

requisitos:
node.js (de preferecia la ultima version)
express (de preferencia la ultima version)
nodemon (de preferencia la ultima version)

npm (para instalar las dependencias)

instalacion:
clonar el repositorio desde el el link del proyecto y luego utilizar el comando git clone para descargarlo de manera local.
ejemplo de uso : git clone https://github.com/carmezy/trabajo-express.git

instalar las dependencias necesarias utilizando npm install

iniciar npm start

rutas:

### Programación (gustavo)

| Acción                                              | Método | Endpoint                                         | Ejemplo uso en Insomnia                                                                                 |
|-----------------------------------------------------|--------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Obtener todos los cursos de programación            | GET    | `/api/curso/programacion`                        | GET → http://localhost:3000/api/curso/programacion                                                      |
| Obtener un curso de programación por ID             | GET    | `/api/curso/programacion/:id`                    | GET → http://localhost:3000/api/curso/programacion/1                                                    |
| Obtener cursos de programación por lenguaje         | GET    | `/api/curso/programacion/lenguaje/:lenguaje`     | GET → http://localhost:3000/api/curso/programacion/lenguaje/javascript                                  |
| Obtener cursos de programación por nivel            | GET    | `/api/curso/programacion/nivel/:nivel`           | GET → http://localhost:3000/api/curso/programacion/nivel/basico                                         |
| Obtener cursos de programación por vistas mínimas   | GET    | `/api/curso/programacion/vistas/:vistas`         | GET → http://localhost:3000/api/curso/programacion/vistas/10000                                         |
| Crear un nuevo curso de programación                | POST   | `/api/curso/programacion`                        | POST → http://localhost:3000/api/curso/programacion<br>Body (JSON):<br>{<br>  "titulo": "aprende javascript",<br>  "lenguaje": "javascript",<br>  "vistas": 10000,<br>  "nivel": "basico"<br>} |
| Actualizar un curso de programación por ID          | PUT    | `/api/curso/programacion/:id`                    | PUT → http://localhost:3000/api/curso/programacion/1<br>Body (JSON):<br>{<br>  "titulo": "nuevo titulo",<br>  "lenguaje": "nuevo lenguaje",<br>  "vistas": 9999,<br>  "nivel": "avanzado"<br>} |
| Eliminar un curso de programación por ID            | DELETE | `/api/curso/programacion/:id`                    | DELETE → http://localhost:3000/api/curso/programacion/1                                                 |

---

### Inglés (pakita)

| Acción                                    | Método | Endpoint                          | Ejemplo uso                                                                                           |
|--------------------------------------------|--------|------------------------------------|-------------------------------------------------------------------------------------------------------|
| Obtener todos los cursos de inglés         | GET    | `/api/curso/ingles`               | `curl http://localhost:3000/api/curso/ingles`                                                         |
| Obtener cursos de inglés por grado         | GET    | `/api/curso/ingles/:grado`        | `curl http://localhost:3000/api/curso/ingles/avanzado`                                                |
| Añadir nuevo curso de inglés               | POST   | `/api/curso/ingles`               | `curl -X POST -H "Content-Type: application/json" -d '{"titulo":"ingles para negocios","grado":"avanzado","vistas":5000,"nivel":"avanzado"}' http://localhost:3000/api/curso/ingles` |
| Actualizar curso de inglés por ID          | PUT    | `/api/curso/ingles/:id`           | `curl -X PUT -H "Content-Type: application/json" -d '{"titulo":"ingles intermedio actualizado","grado":"intermedio","vistas":20000,"nivel":"intermedio"}' http://localhost:3000/api/curso/ingles/2` |
| Eliminar curso de inglés por ID            | DELETE | `/api/curso/ingles/:id`           | `curl -X DELETE http://localhost:3000/api/curso/ingles/2`                                             |

---

## Notas

- Todos los endpoints devuelven respuestas en formato JSON.
- Asegúrate de enviar los datos en formato JSON para métodos POST y PUT.
- Si el puerto de tu servidor es diferente a `3000`, reemplázalo en los ejemplos

- ## trabajo realizado por

- gustavo rodriguez (https://github.com/carmezy)
- pakita dubreus (https://github.com/Pakita01)
- ostraikel (https://github.com/ostraikel)
