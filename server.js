const express = require("express");
const app = express();

// Configure express app 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// Mount Routers
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const indexRouter = require('./routes/index');
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/', indexRouter);

app.use('/public', express.static('public'));

// Set up Port
app.listen(process.env.PORT || 50000);


