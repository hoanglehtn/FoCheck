const express = require('express');
const product = express.Router()
module.exports = product
const ProductControl = require("../controller/productControl")


product.all("",ProductControl.logRequest)