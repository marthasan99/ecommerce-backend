const Category = require("../models/categoryModel.js");

async function createcategoryController(req, res) {
  const { name, description } = req.body;
  console.log(name, description);

  let duplicateCategory = await Category.find({ name });
  if (duplicateCategory.length > 0) {
    return res.send({ error: "Category already exist, Try another" });
  }

  let category = new Category({
    name,
    description,
  });
  category.save();
  res.send({
    success: "category Created Successfully",
  });
}

module.exports = { createcategoryController };
