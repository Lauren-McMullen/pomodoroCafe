const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('./index');
});

// Mount Routers
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.use('/public', express.static('public'));

// Setup Port
const port = 50000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

