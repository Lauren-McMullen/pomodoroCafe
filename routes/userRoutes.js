const express = require('express');
const User = require('../controllers/userController');
const router = express.Router();

router.get('/login', async (req, res) => {
    res.render('./login');
});

router.get('/signup', async (req, res) => {
    res.render('./signup');
});

router.post('/new', async (req, res) => {
    const {username, name, email, password} = req.body;
    const message = await User.createUser(username, name, email, password);
    if(message === "") {
        res.json({
            success: true
        });
    } else {
        res.status(500).json({
            success: false,
            message: message
        });
    }
});

router.put('/update', async (req, res) => {});

router.delete('/delete', async (req, res) => {});


module.exports = router;