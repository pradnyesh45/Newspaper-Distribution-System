const express = require('express');
const router = express.Router();

const vendorsController = require('../controllers/vendors_controller');

router.get('/profile', vendorsController.profile);

router.get('/sign-up', vendorsController.signUp);
router.get('/sign-in', vendorsController.signIn);


router.post('/create', vendorsController.create);
router.post('/create-session', vendorsController.createSession);


router.get('/sign-out', vendorsController.destroySession);

module.exports = router;