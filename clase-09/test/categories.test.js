import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Categories endpoint", () => {
  it("debería tener un status 200 y un array", async function () {
    const res = await request(app).get("/categories");

    // console.log(res.status, res.body);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  
});
