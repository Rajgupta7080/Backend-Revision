const product = require('../models/product')

const getAllProducts = async (req, res) => {
  const mydata = await product.find({})
  res.status(200).json({ mydata })
}
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: 'These products for testing' })
}
module.exports = { getAllProducts, getAllProductsTesting }
