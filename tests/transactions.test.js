const { server } = require("../app");
const db = require("../database/models");
const request = require("supertest")(server);
const expect = require("chai").expect;
const [user1,user2] = require("../utils/initialUser");
const { JWT } = require("../config/jwt")

var token;
before(async () => {
  const response = await request.post("/auth/login").send({
    email: user2.email,
    password: user2.password,
  });

  token = response.body.body.token;
});

describe("Alkibank Wallet", () => {
  describe("Transactions", () => {
    describe("GET /transactions", () => {
      it("Se espera un status code 200 si existen transacciones", async () => {
        const response = await request
          .get(`/transactions`)
          .query({ query: 2 })
          .set({ "x-auth-token": `${token}` });
        
        expect(response.statusCode).to.eql(200);
        expect(JWT.decode(response.body.body).response).not.length(0)
      });
    });
    describe("GET /transactions/:id", () => {
      it("Se espera un status code 200 si se encuentra la transaccion", async () => {
        const response = await request
          .get(`/transactions/${288}`)
          .query({ query: 2 })
          .set({ "x-auth-token": `${token}` });

        expect(response.statusCode).to.eql(200);
      });
    });
    describe("POST /transactions", () => {
      const transaction = {
        description: "Compra camiseta",
        amount: 10000,
        userId: 2,
        categoryId: 2,
        date: new Date(),
      };
      it("Se espera un status code 200 si se añade la transaccion", async () => {
        const response = await request
          .post("/transactions")
          .send(transaction)
          .set({ "x-auth-token": `${token}` });
        
        expect(response.statusCode).to.eql(200)
      });
    });
    describe("PATCH /transactions", () => {
      const transaction = {
        description: "Venta camiseta",
        amount: 12000,
        userId: 2,
        categoryId: 1,
        date: new Date(),
      };
      it("Se espera un status code 200 si se actualiza la transaccion", async () => {
        const response = await request
          .patch(`/transactions/${288}`)
          .send(transaction)
          .set({ "x-auth-token": `${token}` });
        
        expect(response.statusCode).to.eql(200)
      });
    });
    xdescribe("DELETE /transactions", () => {
      it("Se espera un status code 200 si se elimina la transaccion", async () => {
        const response = await request
          .delete(`/transactions/${288}`)
          .set({ "x-auth-token": `${token}` });
        
        expect(response.statusCode).to.eql(200)
      });
    });
  });
});

after(() => {
  server.close(() => {
    db.sequelize.close();
  });
});