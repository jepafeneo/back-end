import Category from "../models/Category.js";

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

// export const getCategories = (req, res) => {
//   res.json(categories);
// };

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.json(category);
  } catch (error) {
    return res.status(400).json({ message: "Invalid category ID" });
  }
};

export const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(422).json({ error: "No tiene nombre" });
  }

  const data = {
    name: req.body.name,
    description: req.body.description,
  };

  const category = new Category(data);
  await category.save();

  res.status(201).json(category);
};

export const updateCategory = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const category = categories.find((c) => c.id == id);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  const { name, description } = req.body;

  if (!name) {
    return res.status(422).json({ error: "Name required" });
  }

  category.name = name;
  category.description = description;

  res.json(category);
};

export const deleteCategory = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const categoryIndex = categories.findIndex((c) => c.id == id);

  if (categoryIndex == -1) {
    return res.status(404).json({ error: "Category not found" });
  }

  categories.splice(categoryIndex, 1);

  res.status(204).send();
};
