const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/vendor');

passport.use(new LocalStrategy({
        usernameField: 'email',
    },
    function(email, password, done){
        User.findOne({email: email}, function(err, vendor){
            if (err){
                console.log('Error in finding vendor --> Passport');
                return done(err);
            }

            if (!vendor || vendor.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }

));


passport.serializeUser(function(id, vendor){
    done(null, vendor.id);
});

passport.deserializeUser(function(is, done){
    Vendor.findById(id, function(err, vendor){
        if(err){
            console.log('Error in finding vendor --> Passport');
            return done(err);
        }

        return done(null, vendor);
    });
});


passport.checkAuthentication = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }

    return res.redirect('/vendors/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        res.locals.vendor = req.vendor;
    }
    next();
}


module.exports = passport;