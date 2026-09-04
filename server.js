import express from 'express'
import cors from 'cors'
import data from './src/model/data.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())

app.get('/professional', async (req, res) => {
    const db = data
    res.status(200).json(db[0])
} )

app.listen(PORT, () => {
    console.log(PORT)
    console.log('app working')
})