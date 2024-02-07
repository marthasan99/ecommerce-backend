const Category = require("../models/categoryModel.js");
const SubCategory = require("../models/subcategoryModel.js");

async function categoryController(req, res) {
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
async function categoryStatusController(req, res) {
  const { name, status } = req.body;
  console.log(name, status);
  if (status == "rejected" || status == "waiting") {
    let updateCategory = await Category.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status } },
      { new: true }
    );
    return res.send({ success: "Status Updated" });
  } else if (status == "approved") {
    let updateCategory = await Category.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status } },
      { new: true }
    );
    return res.send({ success: "Status Updated" });
  }
}

async function subCategoryController(req, res) {
  const { name, description, categoryId } = req.body;

  let duplicateSubCategory = await SubCategory.find({ name });
  if (duplicateSubCategory.length > 0) {
    return res.send({ error: "Subcategory already exist, Try another" });
  }

  let subcategory = new SubCategory({
    name,
    description,
    categoryId,
  });
  subcategory.save();

  console.log(subcategory._id);
  let updateCategory = await Category.findOneAndUpdate(
    { _id: subcategory.categoryId },
    { $push: { subCategory: subcategory._id } },
    { new: true }
  );

  res.send({
    success: "Subcategory Created Successfully",
  });
}

async function subCategoryStatusController(req, res) {
  const { name, status } = req.body;
  console.log(name, status);
  if (status == "rejected" || status == "waiting") {
    let updateCategory = await SubCategory.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status } },
      { new: true }
    );
    return res.send({ success: "Status Updated" });
  } else if (status == "approved") {
    let updateCategory = await SubCategory.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status } },
      { new: true }
    );
    return res.send({ success: "Status Updated" });
  }
}

module.exports = {
  categoryController,
  categoryStatusController,
  subCategoryController,
  subCategoryStatusController,
};
