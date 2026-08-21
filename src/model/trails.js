import { getDb } from "../db/connect.js";

export default async function getTrails() {
    
    const db = getDb()
    const allTrails = await db.collection('trails').find().toArray()
    
    if (!allTrails) {
        throw new Error('Error fetching the data')
    }

    return allTrails
}