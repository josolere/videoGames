/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const index = require('../../src/routes/index')
const { Videogame, conn, Gender } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description:'super juego',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );

   describe('Gendeer',()=>{
  let action;
  let card;
  beforeEach('generos', () => {
    const gender = [
      { name: 'accion' },
      { name: 'card' }
    ];
    return Gender.bulkCreate(gender, { returning: true })
      .then(createdGender => {
        action = createdGender[0].id;
        card = createdGender[1].id;
      });
  });

  it('trae los generos con la peticion GET /genres', () => {
    return agent
      .get('/genres')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2)
      })
  })
})

it('agrega un nuevo videojuego en  POST /videogames, respondiendo con un 201 y creando el videojuego', () => {

  return agent
      .post('/videogames')
      .send({
          name: 'supertru',
          description: 'super juego',
      })
      .expect(201)
      .then(res => {
          const createdVideogame = res.body;
          return Videogame.findByPk(createdVideogame.id)
      })
      .then(foundVideogame => {
          expect(foundVideogame.description).to.be.equal('super juego');
      });

});
    
  });
});
