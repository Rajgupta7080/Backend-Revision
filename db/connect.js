const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectDB = () => {
  console.log('Mongodb is started')
  return mongoose.connect(
    'mongodb+srv://Rajgupta7080:raj1234567@cluster0.lixwzvt.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
}

module.exports = connectDB
