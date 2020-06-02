const User = require('../models/user');

module.exports.profile = function(req, res){
    res.render('users_profile', {
        title: 'Users Profile'
    });
}

module.exports.signUp = function(req, res){
    res.render('user_sign_up', {
        title: 'User Sign Up Page'
    });
}

module.exports.singIn = function(req, res){
    res.render('user_sign_in', {
        title: 'User Sign In Page'
    });
}

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if (err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if (err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else {
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function(req, res){

}