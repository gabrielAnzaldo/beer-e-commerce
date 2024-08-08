const express = require("express");
const app = express();
const products = require("./products");
const stockPrice = require("./stock-price");

app.get("/api/products", (req, res) => {
  setTimeout(() => {
    res.json(products);
  }, 500);
});

app.get("/api/products/:skuID", (req, res) => {
  const skuID = req.params.skuID;
  res.json(stockPrice[skuID]);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
