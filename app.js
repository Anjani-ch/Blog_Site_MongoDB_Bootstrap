const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const { getYear } = require('./modules/date.js');

const aboutRoutes = require('./routes/aboutRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js');
const createRoutes = require('./routes/createRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');
const editRoutes = require('./routes/editRoutes.js');

const app = express();

const PORT = 3000;

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true });

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(homeRoutes);
app.use(aboutRoutes);
app.use(createRoutes);
app.use(blogRoutes);
app.use(editRoutes);

app.use((req, res) => res.render('404', { title: '404', active: '', getYear }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));