import express from 'express'
import cors from 'cors'
import data from './src/model/data.js'
import 'dotenv/config'
import { connectToDb } from './src/mongodb/connection.js'

const PORT = process.env.PORT 
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    
    try {
        const db = await connectToDb();
        const collection = await db.collection('contacts').find().toArray()
        res.status(200).json(collection);
    } catch (err) {
        console.error('Route error:', err);  // <-- This will show in server console
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(PORT)
    console.log('app working')
})