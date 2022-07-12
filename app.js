const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const path = require('path');
const cors = require('cors');

// cors
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(','),
}

app.use(cors(corsOptions));


//Middleware EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 3000;

// Middleware BodyParser

app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/', require('./routes/index'));



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})