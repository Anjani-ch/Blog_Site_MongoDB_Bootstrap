const express = require('express');

const Blog = require('../models/blog.js');

const { getYear } = require('../modules/date.js');

const router = express.Router();

router.get('/blogs/:id', (req, res) => Blog.findById(req.params.id, (err, blog) => err ? res.redirect('/404') : res.render('blog', { blog, title: blog.title, active: '', getYear })));

router.post('/blogs/:id', (req, res) => Blog.findByIdAndDelete(req.params.id, (err, blog) => err ? console.log(err) : res.redirect('/')));

module.exports = router;