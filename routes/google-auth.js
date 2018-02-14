const router = require('express').Router();
const passport = require('passport');

// // auth login
// router.get('/login', (req, res) => {
//     console.log("files sent");
//     res.sendFile("/views/profile.html");
// });

// // auth logout
// router.get('/logout', (req, res) => {
//     // handle with passport
//     req.logout();
//     delete req.session;
//     res.redirect('/');
// });

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: [ 'https://www.googleapis.com/auth/plus.login',
    , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
));

router.get('/google/callback',
    passport.authenticate( 'google', { 
        successRedirect: '/course',
        failureRedirect: '/auth/google/failure'
}));
// callback route for google to redirect to
// router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
//    // res.send(req.user);
//    console.log("Google router.get worked");
// });

module.exports = router;
