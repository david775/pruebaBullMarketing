import express from 'express'
import UserController from '../controller/user'
// import CheckinController from '../controller/checkinRecord
// import { Client } from 'pg'

const port = process.env.PORT ?? 3000

const app = express()

app.post('/login', UserController.login)
// app.post('/register', (req, res) => { })
// app.post('/logout', (req, res) => { })

app.listen(port, () => {
  // console.log(`server listening on port ${port}!`)
})
