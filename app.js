const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000
app.get('/', (req, res) => {
  res.send('Hii man how are you')
})
const start = async (resolve, reject) => {
  try {
    app.listen(PORT, () => {
      console.log(`Port no ${PORT} is started`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
