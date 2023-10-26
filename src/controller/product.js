const fs = require("fs");
const path = require("path");

const Product = require("../models/Product");

async function getAllProducts(req, res) {
  const result = await Product.find({});

  res.send(result);
  res.end();
}

async function uploadProduct(req, res) {
  const { name, price, color, description, isAvailable } = req.body;
  const obj = {
    name: name,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "../../../uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
    price: price,
    color: color,
    description: description,
    isAvailable: isAvailable,
  };

  const result = await Product.create(obj);
  console.log(result);

  res.send(result);
  res.end();
}

async function updateProduct(req, res) {
  const { id, name, price, color, category, description, isAvailable } =
    req.body;
  const result = await Product.findOneAndUpdate(
    { _id: id },
    {
      name: name,
      price: price,
      color: color,
      category: category,
      description: description,
      isAavailable: isAvailable,
    }
  );

  console.log(req.body);

  res.send(result);
  res.end();
}

async function deleteProduct(req, res) {
  const { id } = req.body;

  const result = await Product.findOneAndDelete({ _id: id });

  res.send(result);
  res.end();
}

module.exports = {
  getAllProducts,
  uploadProduct,
  updateProduct,
  deleteProduct,
};
