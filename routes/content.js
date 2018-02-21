const router1 = require('express').Router();

router1.get("/content", (req, res) => {
    res.render("introduction-day1", {defaultLayout: 'main'});
});
router1.get("/terminal", (req, res) => {
    res.render("terminal-day1", {defaultLayout: 'main'});
});
router1.get("/installation", (req, res) => {
    res.render("installation-day1", {defaultLayout: 'main'});
});
router1.get("/github", (req, res) => {
    res.render("gitandgithub-day1", {defaultLayout: 'main'});
});
router1.get("/exercism", (req, res) => {
    res.render("exercism", {defaultLayout: 'main'});
});
router1.get("/html", (req, res) => {
    res.render("html-day2", {defaultLayout: 'main'});
});
router1.get("/css", (req, res) => {
    res.render("css-day2", {defaultLayout: 'main'});
});
router1.get("/js", (req, res) => {
    res.render("js-day2", {defaultLayout: 'main'});
});
router1.get("/functions", (req, res) => {
    res.render("functions-day2", {defaultLayout: 'main'});
});
router1.get("/loops", (req, res) => {
    res.render("loops-day2", {defaultLayout: 'main'});
});
router1.get("/bootstrap", (req, res) => {
    res.render("bootstrap-day3", {defaultLayout: 'main'});
});
router1.get("/grid", (req, res) => {
    res.render("grid-day3", {defaultLayout: 'main'});
});
router1.get("/widget", (req, res) => {
    res.render("bootwidget-day4", {defaultLayout: 'main'});
});
router1.get("/website", (req, res) => {
    res.render("website-day4", {defaultLayout: 'main'});
});

router1.get("/revision5", (req, res) => {
    res.render("revision-day5", {defaultLayout: 'main'});
});

module.exports = router1;