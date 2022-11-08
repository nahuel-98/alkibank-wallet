const { server } = require("../app");
const db = require('../database/models')
const { Category } = require("../database/models");
const { initialCategories } = require("../utils");
const request = require("supertest")(server);
const expect = require("chai").expect;

before(async () => {
  await Category.destroy({
    where: {},
    truncate: {
      cascade: true,
    },
  });
  
  const category1 = await Category.create(initialCategories[0]);
  await category1.save();
});

describe("Alkybank Wallet", () => {
  describe("Category", () => {
    describe("GET All Categories", () => {
      it("Se espera que haya categorias", async () => {
        const response = await request.get("/category");
        console.log(response)

        expect(response.status).to.eql(200);
        expect(response.body.body).not.length(0);
      });
    });
  });
});

after(() => {
  server.close(() => {
    db.sequelize.close()
  })
})