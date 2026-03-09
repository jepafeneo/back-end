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

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.name) {
      return res.status(422).json({ error: "Name required" });
    }

    const categoryUpdate = await Category.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    if (!categoryUpdate) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }

    res.json(categoryUpdate);
  } catch (error) {
    return res.status(404).json({ error: "Categoría no válida" });
  }
};

// export const deleteCategory = (req, res) => {
//   const id = Number(req.params.id);

//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid ID" });
//   }

//   const categoryIndex = categories.findIndex((c) => c.id == id);

//   if (categoryIndex == -1) {
//     return res.status(404).json({ error: "Category not found" });
//   }

//   categories.splice(categoryIndex, 1);

//   res.status(204).send();
// };

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const categoryDelete = await Category.findByIdAndDelete(id);

    if (!categoryDelete) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Id de al categoría no válido" });
  }
};
