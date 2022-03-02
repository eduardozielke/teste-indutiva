import express from 'express'
import mongoose from 'mongoose'
import routes from './Routes/index'
const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/teste-indutiva-db')
let db = mongoose.connection

db.on('error', ()=>{console.log('Houve um erro ao conectar com o db')})
db.once('open', ()=>{console.log('Banco de dados conectado com sucesso')})

app.use(routes)

app.listen(2000, ()=>{console.log('Server is running')})