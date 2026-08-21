import './src/db/dns-init.js'
import app from "./app.js"
import { connectToDb } from "./src/db/connect.js"

const PORT = process.env.PORT

if (!PORT) {
    throw new Error('PORT is not defined in your env')
}

const StartServer = async () => {
    
    try {
        await connectToDb()
        
        app.listen(PORT, () => {
            console.log(`App Running and listening on port ${PORT}`)
        })
    } catch (error) {
        console.error('Database connection failed:',  error.message)
        process.exit(1)
    }
}

await StartServer()