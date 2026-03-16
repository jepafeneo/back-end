import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

import Category from "../models/Category.js";
import Product from "../models/Product.js";

describe("Products endpoint", function () {
  this.timeout(10000);

  beforeEach(async function () {
    await Category.deleteMany({});

    const category = await Category.create({
      name: "Electronics",
    });

    await Product.deleteMany({});

    await Product.create({
      name: "Mouse",
      price: 80,
      stock: 10,
      category: category._id,
    });
  });

  it("debería tener un status 200 y un array", async function () {
    const res = await request(app).get("/products");

    // console.log(res.status, res.body);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.equal(1);
  });

  it("El primer producto tiene que tener nombre", async function () {
    const res = await request(app).get("/products");

    expect(res.body[0]).to.have.property("name");
  });

  it("Debería crear un producto", async function () {
    const category = await Category.findOne({ name: "Electronics" });

    const newProduct = {
      name: "Notebook",
      price: 1000,
      stock: 5,
      category: category.id,
    };

    const res = await request(app).post("/products").send(newProduct);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("name");
    expect(res.body.name).to.equal("Notebook");
  });

  it("Debería traer un producto por el id", async function () {
    const product = await Product.findOne();

    const response = await request(app).get(`/products/${product.id}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("name");
    expect(response.body.name).to.equal("Mouse");
  });
});
