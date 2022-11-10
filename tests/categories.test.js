const { server } = require("../app");
const db = require("../database/models");
const request = require("supertest")(server);
const expect = require("chai").expect;

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
        const response = await request.get(`/categories/${59}`);

        expect(response.status).to.eql(200);
      });
    });
    describe("POST /categories", () => {
      it("Se espera un status 200, sino falta el nombre", async () => {
        const success = {
          name: "Entretenimiento",
          description: "Netflix, Disney +...",
        };

        const error = {
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

        const response = await request.patch(`/categories/${59}`).send(success);

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