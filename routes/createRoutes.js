const express = require('express');

const Blog = require('../models/blog.js');

const { getYear, getDate } = require('../modules/date.js');

const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create', { getYear, active: 'create', title: 'Create' });
});

router.post('/create', (req, res) => {
    const blog = new Blog({
        ...req.body,
        date: getDate(),
    });
    
    blog.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
});

module.exports = router;