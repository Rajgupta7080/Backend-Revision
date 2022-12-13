require('dotenv').config()
const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const products_routes = require('./routes/product')

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hii man how are you')
})

// middleware to set routes
app.use('/api/products', products_routes)
const start = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Port no ${PORT} is started`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
