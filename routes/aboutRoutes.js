const express = require('express');

const { getYear } = require('../modules/date.js');

const router = express.Router();

router.get('/about', (req, res) => {
    res.render('about', { getYear, active: 'about', title: 'About' });
});

module.exports = router;