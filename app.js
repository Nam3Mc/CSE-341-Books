import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './src/swagger/swagger.js'
import contactsRouter from './src/routers/contacts.js'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/contacts', contactsRouter)

export default app