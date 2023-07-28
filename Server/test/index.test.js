const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/rickandmorty/character/827");
      expect(response.statusCode).toBeGreaterThan(400);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Responde con la información correcta debe retornar el objeto access en true", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=david@gmail.com&password=asdfgh2"
      );
      const expectedAccess = { access: true };
      expect(response.body).toEqual(expectedAccess);
    });

    it("Responde con la información incorrecta debe retornar el objeto access en false", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=david@gmail.com&password=holaMundo"
      );

      expect(response.body.access).toEqual(false);
    });
  });

  describe("Favoritos", () => {
    const character1 = { id: 1, name: "David" };
    const character2 = { id: 2, name: "JuanMa" };
    describe("POST /rickandmorty/fav", () => {
      it("Debes agregar un personaje a favoritos", async () => {
        const response = await agent.post("/rickandmorty/fav").send(character1);
        expect(response.body).toContainEqual(character1);
      });

      it("Debes agregar un personaje a favoritos", async () => {
        const response = await agent.post("/rickandmorty/fav").send(character2);
        expect(response.body).toContainEqual(character1);
        expect(response.body).toContainEqual(character2);
      });
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
      it("Debes retornar el array con los personajes si el ID es incorrecto", async () => {
        const response = await agent.delete("/rickandmorty/fav/22");
        expect(response.body).toContainEqual(character1);
        expect(response.body).toContainEqual(character2);
      });

      it("Debes retornar el array sin el personaje eliminado", async () => {
        const response = await agent.delete("/rickandmorty/fav/2");
        expect(response.body).toContainEqual(character1);
        expect(response.body).not.toContainEqual(character2);
      });
    });
  });
});
