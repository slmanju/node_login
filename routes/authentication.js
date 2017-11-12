/**
 * Created by manjula on 11/12/17.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

// home page
router.get('/', function(req, res) {
    res.render('index.ejs');
});

// show the login form
router.get('/login', function(req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// show the signup form
router.get('/signup', function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});

// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;