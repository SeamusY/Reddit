module.exports.Logincheck = 
    (req,res,next)=>{
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }