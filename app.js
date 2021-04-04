const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const port = 3020

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.json())
let routes = require('./routes/appRoute');
routes(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))