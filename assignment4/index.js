const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

const product_Route = require("./expressroute/product");
const seller_Route = require("./expressroute/seller");
const company_Route = require("./expressroute/companey");

app.get('/', (req, res) => res.send('Product Management APIs EXPRESS Router'));

app.use("/product", product_Route);
app.use("/seller",seller_Route);
app.use("/company", company_Route);

app.listen(port, () => console.log(`Example app listening on port `+ port +`!`));