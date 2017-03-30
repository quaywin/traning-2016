var router = require('express').Router();
var userDao = require('./../dao/user.dao');
var authentication = require('./../middlewares/jwt');
module.exports = function() {

    router.post('/login', login);
    router.post('/signup', signup);
    router.delete('/:username',authentication.authentication, deleteUser);
    router.put('/:username',authentication.authentication, updateUser);


    function signup(req, res, next) {
        console.log(req);
        var request = {
            user: req.body.username,
            pass: req.body.password,
            name: req.body.fullname
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
                user: req.body.username,
                pass: req.body.password
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
        var username = req.params.username;
        // console.log(username);
        userDao.deleteUser(username, function(err, response) {
            if (err) {
                next(err)
            } else {
                res.status(200).send(response).end();
            }
        })
    }

    function updateUser(req, res, next) {
        var request = {
            user: req.params.username,
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
