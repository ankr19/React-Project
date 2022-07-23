const connectToMongo = require('./db/db');
const express = require('express')
require('dotenv').config({ path: './app.env' })

connectToMongo();
const app = express()
const port = 5000
app.get('/', (req, res) => {
    res.send('Hello harry')
})
console.log("secret key",process.env.secret_key);
console.log("secret key",process.env.secret_token);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})