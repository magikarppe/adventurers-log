const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;
const session = require('express-session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
};
  
app.use(session(sess));

app.use(routes);

dotenv.config();

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/api',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}!`));