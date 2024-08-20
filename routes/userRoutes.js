const express = require('express');
const User = require('../controllers/userController');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('./login');
});

router.get('/signup', (req, res) => {
    res.render('./signup');
});

router.post('/new', async (req, res) => {
    const {username, name, email, password, role} = req.body;
    const result = await User.createUser(username, name, email, password, role);
    if(result) {
        res.json({success: true});
        res.redirect('./login');
    } else {
            res.status(500).json({
            success: false
        });
    }
});

router.put('/update', (req, res) => {});

router.delete('/delete', (req, res) => {});


module.exports = router;