const { server } = require("../app");
const db = require("../database/models");
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
    describe("GET /categories", () => {
      it("Se espera que haya categorias", async () => {
        const response = await request.get("/categories");

        expect(response.status).to.eql(200);
        expect(response.body.body).not.length(0);
      });
    });
    describe("GET /categories/:id", () => {
      it("Se espera que se obtenga la categoria", async () => {
        const response = await request.get(`/categories/${1}`);

        expect(response.status).to.eql(200);
      });
    });
    describe("POST /categories", () => {
      it("Se espera un status 200, sino falta el nombre", async () => {
        const success = {
          id: 2,
          name: "Entretenimiento",
          description: "Netflix, Disney +...",
        };

        const error = {
          id: 3,
          description: "ErrorObject",
        };

        const response = await request.post("/categories").send(success);

        expect(response.status).to.eql(200);
      });
    });

    describe("PATCH /categories/:id", () => {
      it("Se espera un status 200 al actualizar la categoria, sino falto el campo `name`", async () => {
        const success = {
          name: "Varios",
          description: "Regalos, etc...",
        };

        const error = {
          description: "ErrorObject",
        };

        const response = await request.patch(`/categories/${1}`).send(success);

        expect(response.status).to.eql(200);
      });
    });
  });
});

after(() => {
  server.close(() => {
    db.sequelize.close();
  });
});