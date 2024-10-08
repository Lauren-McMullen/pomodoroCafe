const express = require("express");
const app = express();
require('dotenv').config();


// Configure express app 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Mount Routers
const userRouter = require('./routes/userRoutes');
const indexRouter = require('./routes/index');
app.use('/user', userRouter);
app.use('/', indexRouter);

app.use('/public', express.static('public'));

// Set up database connection
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to Mongoose');
}).catch((e) => {
    console.log('Error:', e);
});

// Set up Port
app.listen(process.env.PORT || 50000);


