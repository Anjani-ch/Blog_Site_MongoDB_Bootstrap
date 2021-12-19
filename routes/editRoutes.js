const express = require('express');

const Blog = require('../models/blog.js');

const { getYear, getDate } = require('../modules/date.js');

const router = express.Router();

router.get('/edit/:id', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            console.log(err);
            res.redirect('/404');
        } else {
            res.render('edit', { getYear, active: '', title: 'Edit', titleValue: blog.title, contentValue: blog.content, id: blog.id });
        }
    });
});

router.post('/edit/:id', (req, res) => Blog.findByIdAndUpdate(req.params.id, { ...req.body, date: getDate() }, (err, blog) => err ? console.log(err) : res.redirect('/')));

module.exports = router;