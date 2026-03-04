import express from "express";
import productsRouter from "./routes/products.router.js";
import pingRouter from "./routes/ping.router.js";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use(pingRouter);

const categories = [
  {
    id: 1,
    name: "Electro",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    name: "Bazar",
    description: "Lorem ipsum bazar",
  },
];

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const category = categories.find((c) => c.id == id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(category);
});

app.post("/categories", (req, res) => {
  console.log(req.body, req.body.name);

  if (!req.body.name) {
    return res.status(422).json({ error: "name is required" });
  }

  const newCategory = {
    id: Date.now(),
    name: req.body.name,
    description: req.body.description,
  };

  categories.push(newCategory);

  res.status(201).json(newCategory);
});

app.listen(3000, () => console.log("http://localhost:3000"));
