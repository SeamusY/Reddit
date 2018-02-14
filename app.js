const express = require("express");
const app = express();
const authRoutes = require('./routes/google-auth');
const passport = require('passport');
const passportSetup = require('./config/passport-setup')(passport);
const session = require("./config/Init-session"); //Redis configuration
const redisClient = require("./config/redis"); //Redis Local host and all the information with server
const pathway = require("./routes/pathway");
const Logincheck = require("./config/guard").Logincheck;
//Redis client information

session(app, redisClient);

//initalize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('views'))

// set up routes 
app.get("/course", Logincheck, (req, res)=>{
    res.sendFile(__dirname+"/coursepage.html");
});

//AuthRouter is equal to /google, so app.use('/auth/google');
app.use('/auth', authRoutes); 

// send home file on connect.
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/views/home.html");
});


app.listen(3000);