const { Router } = require('express');
const {getGames, getName, getIdGame, getGenres, postCrearVideoJuego,getPlataforms,creadosExistentes, prueba} = require('./methods');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//  listar los primeros 15 videojuegos ruta principal
router.get('/videogames', getGames)


//  listar los primeros 15 resultados con frase enviada por query params 
// router.get(`/videogames/name`, getName)


//listar videojuegos detallados
router.get('/videogame/:id', getIdGame)


//traer generos desde api  a base de datos y utilizarlos desde la base de datos
router.get('/genres', getGenres)

//post crear videojuego
router.post('/videogames', postCrearVideoJuego)

//get listar plataformas
router.get('/platforms', getPlataforms)


//get listar existentes o creados
router.get('/creados/:valor', creadosExistentes)

// router.get('/video/id',prueba)

module.exports = router;
