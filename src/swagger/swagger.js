

import swaggerJSDoc from "swagger-jsdoc"

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CONTACS API WEEK 1',
            version: '1.0.0',
            description: 'Documentation for Contacts API'
        },
        apis: ['./src/routers/*.js']
    }
}

const swaggerSpec = swaggerJSDoc(options)

export {
    swaggerSpec
}