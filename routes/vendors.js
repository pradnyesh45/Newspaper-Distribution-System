const express = require('express');
const router = express.Router();
const passport = require('passport');
const vendorsController = require('../controllers/vendors_controller');

router.get('/profile', passport.checkAuthentication, vendorsController.profile);

router.get('/sign-up', vendorsController.signUp);
router.get('/sign-in', vendorsController.signIn);

router.post('/create', vendorsController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/vendors/sign-in'}
), vendorsController.createSession);

router.get('/sign-out', vendorsController.destroySession);

module.exports = router;