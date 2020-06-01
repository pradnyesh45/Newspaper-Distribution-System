module.exports.profile = function(req, res){
    res.render('users_profile', {
        title: 'Users Profile'
    });
}