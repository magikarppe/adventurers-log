const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.use(routes);

dotenv.config()

mongoose.connect(
    process.env.DATABASE_ACCESS, () =>console.log("Database is connected")
);

app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}!`));
