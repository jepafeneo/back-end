import { Router } from "express";

const router = Router();

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

router.get("/", (req, res) => {
  res.json(categories);
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
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

export default router;
