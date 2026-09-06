import express from 'express'
import { allContacts, contactById } from './src/routes/contacts.js'

const app = express()

app.use(express.json())
app.use('/contacts', allContacts)
app.use('/contact', contactById)

export default app