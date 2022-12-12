const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'these are all products' })
}
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: 'These products for testing' })
}
module.exports = { getAllProducts, getAllProductsTesting }
