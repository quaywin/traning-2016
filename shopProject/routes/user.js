var router = require('express').Router();
var userDao = require('./../dao/user.dao');
var authentication = require('./../middlewares/jwt');
module.exports = function() {

    router.post('/login', login);
    router.post('/signup', signup);
    router.delete('/:email', authentication.authentication, deleteUser);
    router.put('/:email', authentication.authentication, updateUser);


    function signup(req, res, next) {
        var request = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        }
        userDao.signup(request, function(err, respone) {
            if (err) {
                next(err);
            } else {
                res.status(200).send(respone).end();
            }
        })
    }


    function login(req, res, next) {
        // console.log(req.body);
        var request = {
                email: req.body.email,
                password: req.body.password
            }
            // console.log(req.body.username);

        userDao.login(request, function(err, response) {
            if (err) {
                next(err)
            } else {
                res.status(200).send(response).end();
            }
        })
    }

    function deleteUser(req, res, next) {
        var email = req.params.email;
        console.log(email);
        userDao.deleteUser(email, function(err, response) {
            if (err) {
                next(err)
            } else {
                res.status(200).send(response).end();
            }
        })
    }

    function updateUser(req, res, next) {
        var request = {
            email: req.params.email,
            data: {
                passUp: req.body.passUp,
                nameUp: req.body.nameUp
            }
        }
        userDao.updateUser(request, function(err, response) {
            if (err) {
                next(err)
            } else {
                res.status(200).send(response).end();
            }
        })
    }
    return router;
};
