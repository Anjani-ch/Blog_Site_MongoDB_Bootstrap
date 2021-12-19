const express = require('express');

const Blog = require('../models/blog.js');

const { getYear } = require('../modules/date.js');

const router = express.Router();

router.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => err ? console.log(err) : res.render('home', { getYear, active: 'home', blogs, title: 'Home' }));
});

module.exports = router;