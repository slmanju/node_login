var express = require('express');
var router = express.Router();
var passport = require("passport");

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

// PROFILE SECTION =========================
router.get('/', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.user
    });
});

module.exports = router;
