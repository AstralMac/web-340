const request = require("supertest");
const startServer = require("../src/server");

let server;

beforeAll(() => {
  server = startServer();
});

afterAll((done) => {
  server.close(done);
});

describe("Character Creation API", () => {
  it("POST /create-character should create a character", async () => {
    const response = await request(server)
      .post("/create-character")
      .send({ class: "Warrior", gender: "Male", funFact: "Loves to sing" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("class", "Warrior");
    expect(response.body).toHaveProperty("gender", "Male");
    expect(response.body).toHaveProperty("funFact", "Loves to sing");
  });

  it("POST /confirm-character should confirm character creation", async () => {
    const response = await request(server)
      .post("/confirm-character");

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Character creation confirmed");
  });

  it("GET /view-character should fetch the created character", async () => {
    const response = await request(server)
      .get("/view-character");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("class", "Warrior");
    expect(response.body).toHaveProperty("gender", "Male");
    expect(response.body).toHaveProperty("funFact", "Loves to sing");
  });

  it("GET /nonexistent-route should return 404", async () => {
    const response = await request(server)
      .get("/nonexistent-route");

    expect(response.statusCode).toBe(404);
    expect(response.text).toEqual("Page not found");
  });
});
