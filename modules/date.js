const date = new Date();

const getYear = () => date.getFullYear();

const getDate = () => date.toDateString();

module.exports = { getYear, getDate };