# trabajo-express

descripcion: API REST para cursos academicos de matematica, programacion e idiomas

requisitos:
node.js (de preferecia la ultima version)
express (de preferencia la ultima version)
nodemon (de preferencia la ultima version)

npm install (para instalar las dependencias)

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
| Acción                                              | Método | Endpoint                                         | Ejemplo uso en Insomnia                                                                                 |
|-----------------------------------------------------|--------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Obtener todos los cursos de inglés                  | GET    | `/api/curso/ingles`                              | GET → http://localhost:3000/api/curso/ingles                                                            |
| Obtener un curso de inglés por ID                   | GET    | `/api/curso/ingles/:id`                          | GET → http://localhost:3000/api/curso/ingles/1                                                          |
| Obtener cursos de inglés por grado                  | GET    | `/api/curso/ingles/grado/:grado`                 | GET → http://localhost:3000/api/curso/ingles/grado/avanzado                                             |
| Obtener cursos de inglés por nivel                  | GET    | `/api/curso/ingles/nivel/:nivel`                 | GET → http://localhost:3000/api/curso/ingles/nivel/intermedio                                           |
| Obtener cursos de inglés por vistas mínimas         | GET    | `/api/curso/ingles/vistas/:vistas`               | GET → http://localhost:3000/api/curso/ingles/vistas/5000                                                |
| Crear un nuevo curso de inglés                      | POST   | `/api/curso/ingles`                              | POST → http://localhost:3000/api/curso/ingles<br>Body (JSON):<br>{<br>  "titulo": "ingles para negocios",<br>  "grado": "avanzado",<br>  "vistas": 5000,<br>  "nivel": "avanzado"<br>} |
| Actualizar un curso de inglés por ID                | PUT    | `/api/curso/ingles/:id`                          | PUT → http://localhost:3000/api/curso/ingles/2<br>Body (JSON):<br>{<br>  "titulo": "ingles intermedio actualizado",<br>  "grado": "intermedio",<br>  "vistas": 20000,<br>  "nivel": "intermedio"<br>} |
| Eliminar un curso de inglés por ID                  | DELETE | `/api/curso/ingles/:id`                          | DELETE → http://localhost:3000/api/curso/ingles/2                                                       |

---

## Notas

- Todos los endpoints devuelven respuestas en formato JSON.
- Asegúrate de enviar los datos en formato JSON para métodos POST y PUT.
- Si el puerto de tu servidor es diferente a `3000`, reemplázalo en los ejemplos

- ## trabajo realizado por

- gustavo rodriguez (https://github.com/carmezy)
- pakita dubreus (https://github.com/Pakita01)
- ostraikel (https://github.com/ostraikel)
