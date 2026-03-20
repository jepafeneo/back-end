import "../db.js";

import Product from "../models/Product.js";
import Category from "../models/Category.js";

export async function seedDatabase() {
  await Product.deleteMany({});
  await Category.deleteMany({});

  const categories = await Category.insertMany([
    { name: "Electronics" },
    { name: "Gaming" },
    { name: "Accessories" },
  ]);

  await Product.insertMany([
    {
      name: "Mouse",
      price: 80,
      stock: 10,
      category: categories[0]._id,
    },
    {
      name: "Keyboard",
      price: 120,
      stock: 5,
      category: categories[0]._id,
    },

    {
      name: "Gaming Mouse",
      price: 150,
      stock: 7,
      category: categories[1]._id,
    },
    {
      name: "Gaming Headset",
      price: 200,
      stock: 3,
      category: categories[1]._id,
    },

    {
      name: "USB Hub",
      price: 40,
      stock: 20,
      category: categories[2]._id,
    },
    {
      name: "Laptop Stand",
      price: 60,
      stock: 8,
      category: categories[2]._id,
    },
  ]);

  console.log("Database seeded");
  process.exit();
}

seedDatabase();
