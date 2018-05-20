const GoogleStrategy = require('passport-google-oauth2').Strategy;
const env = require('dotenv');
env.config();

module.exports = (passport) => {
  passport.use(new GoogleStrategy({
    // options for google strategy
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://www.YoSeaAsia.com/auth/google/callback',
    passReqToCallback: true
  }, (request, accessToken, refreshToken, profile, done) => {
    // User.findOrCreate({googleId:profile.id}, function (err, user){
    return done(null, profile);
    // })
  }
  ));
  passport.serializeUser((id, done) => {
    done(null, id);
  });
  passport.deserializeUser((id, done) => {
    // User.findById(id).then((user) => {
    done(null, id);
    // });
  });
}