const connectDB = require('./db/connect')
const Product = require('./models/product')

const productJson = require('./productDb.json')
const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://Rajgupta7080:raj1234567@cluster0.lixwzvt.mongodb.net/Cluster0?retryWrites=true&w=majority',
    )
    await Product.create(productJson)
    console.log('Successfully added')
  } catch (error) {
    console.log(error)
  }
}
start()
