import express from 'express'
import { configDotenv } from "dotenv"

configDotenv()

const app = express()
const porta = process.env.PORTA

app.get('/ping', (req, res) => {
  res.send('pong!')
})

app.listen(porta, () => {
  console.log(`Server rodando porta: ${porta}`)
})