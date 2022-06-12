const connect = require('./db');
const express = require('express');

connect();

const app = express()
const port = 5000

app.use(express.json());
// avaible routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})