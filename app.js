import express from 'express'
import getTrails from './src/model/trails.js'
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `Book app working`
    })
})

app.get('/trails', async (req, res) => {
    try {
        const trails = await getTrails()
        return res.status(200).json(trails)
    } catch (error) {
        console.error('Error fetchin trails', error)
        return res.status(500).json({error: 'error fetching trails'})
    }
})

export default app