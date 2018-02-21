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

router.get("/exercism", (req, res) => {
    res.render("exercism", {defaultLayout: 'main'});
});
router.get("/html", (req, res) => {
    res.render("html-day2", {defaultLayout: 'main'});
});
router.get("/css", (req, res) => {
    res.render("css-day2", {defaultLayout: 'main'});
});
router.get("/js", (req, res) => {
    res.render("js-day2", {defaultLayout: 'main'});
});
router.get("/functions", (req, res) => {
    res.render("functions-day2", {defaultLayout: 'main'});
});
router.get("/loops", (req, res) => {
    res.render("loops-day2", {defaultLayout: 'main'});
});
router.get("/bootstrap", (req, res) => {
    res.render("bootstrap-day3", {defaultLayout: 'main'});
});
router.get("/grid", (req, res) => {
    res.render("grid-day3", {defaultLayout: 'main'});
});
router.get("/widget", (req, res) => {
    res.render("bootwidget-day4", {defaultLayout: 'main'});
});
router.get("/website", (req, res) => {
    res.render("website-day4", {defaultLayout: 'main'});
});

router.get("/revision1", (req, res) => {
    res.render("revision-day5", {defaultLayout: 'main'});
});

module.exports = router;