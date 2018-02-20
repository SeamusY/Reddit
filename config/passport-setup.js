const GoogleStrategy = require('passport-google-oauth2').Strategy;
const env = require('dotenv');
env.config();

module.exports = (passport) => {
  passport.use(new GoogleStrategy({
    // options for google strategy
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true
  }, (request, accessToken, refreshToken, profile, done) => {
    // User.findOrCreate({googleId:profile.id}, function (err, user){
    console.log(profile);
    return done(null, profile);
    // })
  }
  ));
  passport.serializeUser((id, done) => {
    done(null, id);
  });
  passport.deserializeUser((id, done) => {
    // User.findById(id).then((user) => {
    console.log("Passport Deserilized");
    done(null, id);
    // });
  });
}