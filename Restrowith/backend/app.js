const connectToMongo = require("./db/db");
const express = require("express");
require("dotenv").config({ path: "./.env" });

connectToMongo();
const app = express();
const port = process.env.port;

// defining the routes
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
