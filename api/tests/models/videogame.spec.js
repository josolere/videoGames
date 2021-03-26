const { Videogame, conn, Gender } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });

      it('VideoGame tiene la definicion del esquema esperado', () => {
        console.log(Videogame);
        expect(Videogame.tableAttributes.releaseDate).to.be.an('object')
      });

      it('Gender tiene la definicion del esquema esperado', () => {
        console.log(Gender);
        expect(Gender.tableAttributes.name).to.be.an('object')
      });
      
    });
  });
});
