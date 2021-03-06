const express = require("express");
const app = express();
const authRoutes = require('./routes/google-auth');
const passport = require('passport');
const passportSetup = require('./config/passport-setup')(passport);
const session = require("./config/Init-session"); //Redis configuration
const redisClient = require("./config/redis"); //Redis Local host and all the information with server
const Logincheck = require("./config/guard").Logincheck;
const hb = require('express-handlebars');
const content = require("./routes/content");
const database= require("./config/database");
const path = require("path");
const bodyParser = require('body-parser');
//Setting Up handle bars

app.engine('handlebars', hb({defaultLayout: 'main' }));
app.set("view engine",'handlebars');
//Redis client information

session(app, redisClient);

//initalize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname + '/Public'/*, redirect : false}*/)));

//BODY PARSER set up

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// send home file on connect.
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Public/index.html");
});

// set up routes 
app.use("/user", Logincheck, content); //Render contents

app.get("/courses",Logincheck,(req, res) => { // Guard.js caused a redirection and constant loop.
    new database.User(req.user, database.knex); //
    res.sendFile(__dirname + "/coursepage.html");
});
//AuthRouter is equal to /google, so app.use('/auth/google');
app.use('/auth', authRoutes);

app.listen(3000);