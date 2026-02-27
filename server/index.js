import express from 'express'
import dotenv from 'dotenv'
import connectdb from  './utils/connectdb.js'
dotenv.config()   

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ message: 'Exam Notes Backend Ai is Running' })
}) 

const startServer = async () => {
  await connectdb()
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()

