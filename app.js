const express = require("express");
const app = express();
const authRoutes = require('./routes/google-auth');
const contentRoutes = require('./routes/content')
const passport = require('passport');
const passportSetup = require('./config/passport-setup')(passport);
const session = require("./config/Init-session"); //Redis configuration
const redisClient = require("./config/redis"); //Redis Local host and all the information with server
const Logincheck = require("./config/guard").Logincheck;
const hb = require('express-handlebars');

//Setting Up handle bars

app.engine('handlebars', hb({defaultLayout: 'main' }));
app.set("view engine",'handlebars');
//Redis client information

session(app, redisClient);

//initalize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/Public'/*, redirect : false}*/));

// send home file on connect.
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Public/index.html");
});


// set up routes 
app.get("/courses",Logincheck,(req, res) => { // Guard.js caused a redirection and constant loop.
    res.sendFile(__dirname + "/coursepage.html");
});
//AuthRouter is equal to /google, so app.use('/auth/google');
app.use('/auth', authRoutes);
app.use('/user',Logincheck, contentRoutes);

//Content Rendering
/*
app.get("/content", (req, res) => {
    res.render("introduction-day1", {defaultLayout: 'main'});
});
app.get("/terminal", (req, res) => {
    res.render("terminal-day1", {defaultLayout: 'main'});
});
app.get("/installation", (req, res) => {
    res.render("installation-day1", {defaultLayout: 'main'});
});
app.get("/github", (req, res) => {
    res.render("gitandgithub-day1", {defaultLayout: 'main'});
});
app.get("/exercism", (req, res) => {
    res.render("exercism", {defaultLayout: 'main'});
});
app.get("/html", (req, res) => {
    res.render("html-day2", {defaultLayout: 'main'});
});
app.get("/css", (req, res) => {
    res.render("css-day2", {defaultLayout: 'main'});
});
app.get("/js", (req, res) => {
    res.render("js-day2", {defaultLayout: 'main'});
});
app.get("/functions", (req, res) => {
    res.render("functions-day2", {defaultLayout: 'main'});
});
app.get("/loops", (req, res) => {
    res.render("loops-day2", {defaultLayout: 'main'});
});
app.get("/bootstrap", (req, res) => {
    res.render("bootstrap-day3", {defaultLayout: 'main'});
});
app.get("/grid", (req, res) => {
    res.render("grid-day3", {defaultLayout: 'main'});
});
app.get("/widget", (req, res) => {
    res.render("bootwidget-day4", {defaultLayout: 'main'});
});website
app.get("/website", (req, res) => {
    res.render("website-day4", {defaultLayout: 'main'});
});

app.get("/revision5", (req, res) => {
    res.render("revision-day5", {defaultLayout: 'main'});
});
*/

app.listen(3000);