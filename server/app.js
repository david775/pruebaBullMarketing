import express from 'express'
import UserController from '../controller/user'
import { Client } from 'pg'
// const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'PruebaBullMarketing',
  password: '1234',
  port: 5432
})

client.connect()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error de conexión', err.stack))
const app = express()

const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.post('/login', (req, res) => {
  // UserController. 
})
app.post('/register', (req, res) => { })
app.post('/logout', (req, res) => { })

app.listen(port, () => {
  console.log(`server listening on port ${port}!`)
})
