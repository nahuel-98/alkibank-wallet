const { server } = require("../app");
const db = require("../database/models");
const request = require("supertest")(server);
const expect = require("chai").expect;
const [user1] = require("../utils/initialUser");


var token;
before(async () => {
  const response = await request.post("/auth/login").send({
    email: user1.email,
    password: user1.password,
  });
  //id?
  token = response.body.body.token;
});

describe("Alkybank Wallet", () => {
  describe("Category", () => {
    describe("GET /categories", () => {
      it("Se espera que haya categorias", async () => {
        const response = await request
          .get("/categories")
          .set({ "x-auth-token": `${token}` });

        expect(response.status).to.eql(200);
        expect(response.body.body).not.length(0);
      });
    });
    describe("GET /categories/:id", () => {
      it("Se espera que se obtenga la categoria", async () => {
        const response = await request
          .get(`/categories/${1}`)
          .set({ "x-auth-token": `${token}` });

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

        const response = await request
          .post("/categories")
          .send(success)
          .set({ "x-auth-token": `${token}` });

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

        const response = await request
          .patch(`/categories/${2}`)
          .send(success)
          .set({ "x-auth-token": `${token}` });

        expect(response.status).to.eql(200);
      });
    });
    xdescribe("DELETE /categories/:id", () => {
      it("Se espera un status 200 al eliminar la categoria", async () => {

        const response = await request
          .delete(`/categories/${77}`)
          .set({ "x-auth-token": `${token}` });

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
