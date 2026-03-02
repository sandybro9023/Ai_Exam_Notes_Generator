import express from 'express'
import dotenv from 'dotenv'
import connectdb from  './utils/connectdb.js'
import authRouter from './routes/auth_route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/user_route.js'
dotenv.config()   

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ message: 'Exam Notes Backend Ai is Running' })
}) 

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
const startServer = async () => {
  await connectdb()
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()

