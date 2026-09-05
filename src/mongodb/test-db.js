import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 30000,          // 30 seconds
    socketTimeoutMS: 60000,
    tlsAllowInvalidCertificates: true,        // ⚠️ for debugging only
});

async function test() {
    try {
        await client.connect();
        console.log('✅ Connected!');
        const db = client.db(process.env.MONGODB_DB_NAME);
        const collections = await db.listCollections().toArray();
        console.log('Collections:', collections);
    } catch (err) {
        console.error('❌ Test failed:', err);
    } finally {
        await client.close();
    }
}
test();