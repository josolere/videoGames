const fetch = require('node-fetch');
const { Videogame, Gender } = require('../db');
const { API_KEY } = process.env;

//---------------------------------------------------------------------------------------------------------------------------

// metodo get ruta principal 
const getGames = (req, res) => {
    const nombre = req.query.name
    let array = []

    Object.values(req.query).length !== 0
        ? fetch(`https://api.rawg.io/api/games?search=${nombre}&page_size=15`)
            .then(result => result.json())
            .then(e => {
                e.results.map(mapeo => {
                    let arrayGender = []
                    mapeo.genres.map(gen => {
                        arrayGender.push(gen.name)
                    })
                    array.push({ name: mapeo.name, image: mapeo.background_image, genres: arrayGender, rating: mapeo.rating })
                })
                array.length !== 0 ? res.send(array) : res.send('No existe el  videojuego')
            })
        : fetch('https://api.rawg.io/api/games?page_size=6')
            .then(result => result.json())
            .then(e => {
                e.results.map(mapeo => {
                    let arrayGender = []
                    mapeo.genres.map(gen => {
                        arrayGender.push(gen.name)
                    })
                    array.push({ name: mapeo.name, image: mapeo.background_image, genres: arrayGender, rating: mapeo.rating })
                })
                res.send(array)
            })
}


//------------------------------------------------------------------------------------------------------------------------------------------

//metodo get que liste los detalles del videojuego
const getIdGame = (req, res) => {
    let { id } = req.params;
    console.log(id);
    Videogame.findAll()
        .then(e => {
            const fil = e.filter(filte => filte.id === id)
            fil.length === 0
                ? fetch(`https://api.rawg.io/api/games/${id}`)
                    .then(e => e.json())
                    .then(re => {
                        let arrayGender = []
                        re.genres.map(mape => {
                            arrayGender.push(mape.name)
                        })
                        let arrayPlatforms = [];
                        re.platforms.map(mape => {
                            arrayPlatforms.push(mape.platform.name)
                        })
                        const obj = {
                            id: re.id,
                            name: re.name,
                            genres: arrayGender,
                            image: re.background_image,
                            description: re.description,
                            releaseDate: re.released,
                            reting: re.rating,
                            platforms: arrayPlatforms,
                        }
                        res.send(obj)
                    })
                    .catch(err => res.send('No existe el video juego'))
                : Videogame.findByPk(id, { include: Gender })
                    .then((videogames) => {
                        res.status(200).send(videogames)
                    })
        })
        .catch((err) => res.send(err))
}

//------------------------------------------------------------------------------------------------------------------------------

//get listar generos desde la api y guerdar en la base de datos. los requiere y envia
const getGenres = (req, res) => {
    const arrayGender = []
    const gener = req.query.name
    console.log(gener)
    Object.values(req.query).length !== 0        // hasta la linea 112 para filtrar por genero 
        ? fetch(`https://api.rawg.io/api/genres`)
            .then(e => e.json())
            .then(resultado => {
                const filtrado = resultado.results.filter(filt => filt.name === gener)
                const nuevoArray = []
                filtrado[0].games.map(mape => {
                    nuevoArray.push({ name: mape.name, id: mape.id })
                })              
                let count = 0
                const arrayNue = []
                nuevoArray.map(mapeo => {
                    fetch(`https://api.rawg.io/api/games/${mapeo.id}`)
                        .then(e => e.json())
                        .then(result => {
                            let arrayGender = []
                            result.genres.map(mape => {
                                arrayGender.push(mape.name)
                            })
                            arrayNue.push({ name: result.name, image: result.background_image, rating: result.rating, genres:arrayGender })
                            count++
                            count === nuevoArray.length ? res.send(arrayNue)
                                :
                                null
                        })                        
                })
            })
            .catch((error) => res.send(console.log(error)))
        :
        Gender.findAll()     //verifica si al llamar a la base de datos hay generos guardados
            .then(gen => {
                if (gen.length === 0) {
                    fetch('https://api.rawg.io/api/genres')     //lista desde la api por que no hay datos guardados 
                        .then(result => result.json())
                        .then(resul => {
                            let count = 1
                            resul.results.map(e => {
                                Gender.create({ name: e.name },)   //crea generos en la base de datos
                                    .then(en => {
                                        arrayGender.push({ name: en.dataValues.name, id: en.dataValues.id })  //recupera datos desde la base de datos
                                        count === resul.count ? res.send(arrayGender) :
                                            count++
                                    })
                            })
                        })
                } else {
                    Gender.findAll({ attributes: ['name', 'id'] })   //recupera desde la base de datos si ya hay datos guardados 
                        .then((genres) => {
                            res.send(genres)
                        })
                }
            })
            .catch((error) => res.send(error))
}

//----------------------------------------------------------------------------------------------------------------------------------

//post crear videojuegos
const postCrearVideoJuego = async (req, res) => {
    console.log(req.body)
    let arrayGender = req.body.gender
    if (!Array.isArray(arrayGender)) {
        arrayGender = [arrayGender]
    }
    const videJuego = await Videogame.create(req.body)
    arrayGender.map(async e => {
        const gender = await Gender.findByPk(e)
        await videJuego.addGender(gender)
    })
    res.json(videJuego)
}

//-----------------------------------------------------------------------------------------------------------------------------------

//get listar plataformas
const getPlataforms = (req, res) => {
    fetch('https://api.rawg.io/api/platforms')
        .then(result => result.json())
        .then(e => {
            const arrayPlataforms = []
            e.results.map(mapeo => {
                arrayPlataforms.push(mapeo.name)
            })
            res.send(arrayPlataforms)
        })
}

//-------------------------------------------------------------------------------------------------------------------------------

// const prueba = (req, res) => {
//     console.log(req.query.id)
//     Videogame.findByPk(req.query.id,{include:Gender})
//     .then(e=>{
//         console.log(e)
//         res.send(e)
//     })
// }




module.exports = {
    getGames,
    // getName,
    getIdGame,
    getGenres,
    postCrearVideoJuego,
    getPlataforms
    // prueba
}