const { server } = require("../app");
const db = require("../database/models");
const request = require("supertest")(server);
const expect = require("chai").expect;

const [user1, user2] = require("../utils/initialUser");

var token;

describe("Alkibank Wallet", () => {
  describe("Users", () => {
    describe("POST /users", () => {
      it("Se espera un status code 201 para el registro, si el usuario existe se espera un status code 200", async () => {
        const response = await request.post("/users").send(user1);

        expect(response.statusCode).to.satisfy((code) => {
          if (code === 201 || code === 200) {
            return true;
          }
        });
      });
    });
    describe("POST /auth/login", () => {
      it("Se espera un status code 200 para un login exitoso", async () => {
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
        expect(response.body.body).not.length(0);
      });
    });
    describe("GET /users/:id", () => {
      it("Se espera un status code 200 si se encuentra el usuario", async () => {
        const response = await request
          .get(`/users/${2}`)
          .set({ "x-auth-token": `${token}` });

        expect(response.statusCode).to.eql(200);
      });
    });
    describe("PATCH /users/:id", () => {
      const userUpdate = {
        firstName: "Pablizinho",
        lastName: "Mourinho",
        email: "pablooscarchavez@gmail.com",
      };
      it("Se espera un status code 200 si se actualiza el usuario", async () => {
        const response = await request
          .patch(`/users/${2}`)
          .send(userUpdate)
          .set({ "x-auth-token": `${token}` });

        expect(response.statusCode).to.eql(200);
      });
    });

    xdescribe("DELETE /users/:id", () => {
      it("Se espera un status code 200 si se elimina el usuario", async () => {
        const response = await request
          .delete(`/users/${2}`)
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
