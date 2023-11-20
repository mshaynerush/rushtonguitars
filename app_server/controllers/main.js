const pkg = require('../../package.json');

const index = (req, res) => {
    const pgTitle = pkg.description;
    res.render('index', { title: pgTitle });
}

module.exports = {
    index
}