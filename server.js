const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database is connected"))

app.listen(3000, () => console.log("Server is running"))
