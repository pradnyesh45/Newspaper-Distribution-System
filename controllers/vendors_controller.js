const User = require('../models/vendor');

module.exports.profile = function(req, res){
    res.render('vendor_profile', {
        title: 'Vendors Profile'
    });
}

module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/vendors/profile');
    }

    res.render('vendor_sign_up', {
        title: 'Vendor Sign Up Page'
    });
}

module.exports.signIn = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/vendors/profile');
    }

    res.render('vendor_sign_in', {
        title: 'Vendor Sign In Page'
    });
}

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    Vendor.findOne({email: req.body.email}, function(err, vendor){
        if (err){console.log('error in finding vendor in signing up'); return}

        if (!vendor){
            User.create(req.body, function(err, user){
                if (err){console.log('error in creating vendor while signing up'); return}

                return res.redirect('/vendors/sign-in');
            })
        }else {
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}