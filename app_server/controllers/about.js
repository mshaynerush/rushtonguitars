const about = (req, res) => {
    res.render('about', { title: "About Rushton Guitars" });
}

module.exports = {
    about
}