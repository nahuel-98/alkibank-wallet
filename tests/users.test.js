const { server } = require("../app");
const db = require("../database/models");
const request = require("supertest")(server);
const expect = require("chai").expect;

const [user1, user2] = require("../utils/initialUser");

var token;

describe("Alkibank Wallet", () => {
  describe("Users", () => {
    describe("POST /users", () => {
      it("Se espera un registro exitoso", async () => {
        const response = await request.post("/users").send(user1);

        expect(response.statusCode).to.satisfy((code) => {
          if (code === 201 || code === 200) {
            return true;
          }
        });
      });
      describe("POST /auth/login", () => {
        it("Se espera un login exitoso", async () => {
          const response = await request.post("/auth/login").send({
            email: user1.email,
            password: user1.password,
          });

          token = response.body.body.token;

          expect(response.statusCode).to.eql(200);
        });
      });
      describe("GET /users", () => {
        it("Se espera que existan usuarios", async () => {
          const response = await request
            .get(`/users`)
            .set({ "x-auth-token": `${token}` });

          expect(response.statusCode).to.eql(200);
        });
      });
      describe("GET /users/:id", () => {
        it("Se espera encontrar el usuario", async () => {
          const response = await request
            .get(`/users/${81}`)
            .set({ "x-auth-token": `${token}` });

          expect(response.statusCode).to.eql(200);
        });
      });
      describe("PATCH /users/:id", () => {
        const userUpdate = {
          firstName: "Pablizinho",
          lastName: "Mourinho",
          email: "pablizinho187@gmail.com",
        };
        it("Se espera actualizar el usuario", async () => {
          const response = await request
            .patch(`/users/${4}`)
            .send(userUpdate)
            .set({ "x-auth-token": `${token}` });

          expect(response.statusCode).to.eql(200);
        });
      });
      describe("DELETE /users/:id", () => {
        it("Se espera eliminar al usuario", async () => {
          const response = await request
            .delete(`/users/${8}`)
            .set({ "x-auth-token": `${token}` });

          expect(response.statusCode).to.eql(200);
        });
      });
    });
  });

  after(() => {
    server.close(() => {
      db.sequelize.close();
    });
  });
});