import app from "./app.js"

const PORT = process.env.PORT

if (!PORT) {
    throw new Error('PORT is not defined in your env')
}

app.listen(PORT, () => {
    console.log(`App Running and listening on port ${PORT}`)
})