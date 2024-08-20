const express = require('express');
const User = require('../models/usermodel');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('./login');
});

router.get('/signup', (req, res) => {
    res.render('./signup');
});

router.post('/new', (req, res) => {
    console.log("Sign up sent!");
});

router.put('/update', (req, res) => {});

router.delete('/delete', (req, res) => {});


module.exports = router;