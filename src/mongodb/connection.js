import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

const connectToDb = async () => {
    try {

        await client.connect()
        const db = await client.db(process.env.MONGODB_DB_NAME)

        if (!db) {
            throw new Error('Database not found while connecting')
        }

        return db

    } catch (error) {
        console.error('Connection error with Mongo db', error)
        throw error
    }
}

export {
    connectToDb
}