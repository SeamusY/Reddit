const router = require('express').Router();

router.get("/introduction", (req, res) => {
    res.render("introduction-day1", {defaultLayout: 'main'});
});
router.get("/terminal", (req, res) => {
    res.render("terminal-day1", {defaultLayout: 'main'});
});
router.get("/installation", (req, res) => {
    res.render("installation-day1", {defaultLayout: 'main'});
});
router.get("/github", (req, res) => {
    res.render("gitandgithub-day1", {defaultLayout: 'main'});
});

module.exports = router;