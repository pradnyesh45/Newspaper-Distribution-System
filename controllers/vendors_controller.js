const Vendor = require('../models/vendor');


module.exports.profile = function(req, res){
    return res.render('vendor_profile', {
        title: 'Vendor Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/vendors/profile');
    }


    return res.render('vendor_sign_up', {
        title: "NDS | Vendor Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/vendors/profile');
    }
    return res.render('vendor_sign_in', {
        title: "NDS | Vendor Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding vendor in signing up'); return}

        if (!user){
            Vendor.create(req.body, function(err, user){
                if(err){console.log('error in creating vendor while signing up'); return}

                return res.redirect('/vendors/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the vendor
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
}