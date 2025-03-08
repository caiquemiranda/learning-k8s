import express from "express"
import { configDotenv } from "dotenv"
import { filmes } from "./dados/filmes.ts"

configDotenv()

const app = express()
const porta = process.env.PORTA

app.get("/ping", (req, res) => {
  res.send("pong!")
})

app.listen(porta, () => {
  console.log(`Server rodando porta: ${porta}`)
})

app.get("/filmes", (req, res) => {
  res.status(200).json(filmes)
})

app.post("/filmes", (req, res) => {
  const novoFilme = req.body
  filmes.push(novoFilme)
  res.status(201).json(novoFilme)
})
