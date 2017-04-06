var user = require('./../models/user.model');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports = {
    login: login,
    signup: signup,
    deleteUser: deleteUser,
    updateUser: updateUser
}

function signup(request, callback) {
    var salt = crypto.randomBytes(128).toString('base64');
    if (request.email == "" || request.password == "" || request.username == "") {
        callback({
            "message": "thieu thong tin"
        })
    } else {
        crypto.pbkdf2(request.password, salt, 100000, 512, 'sha512', (err, key) => {
            if (err) throw err;
            var newUser = user({
                email: request.email,
                password: key.toString('hex'),
                salt: salt,
                username: request.username
            })
            newUser.save(function(err) {
                if (err) throw err;
                callback(null, {
                    "message": "thanh cong"
                })
                console.log('User created');
            })
        });
    }
}


function login(request, callback) {
    // console.log(request);
    user.findOne({
        email: request.email
    }, function(err, user) {
        if (err) throw err;
        else {
            crypto.pbkdf2(request.password, user.salt, 100000, 512, 'sha512', (err, key) => {
                if (err) throw err;
                else if (key.toString('hex') == user.password) {
                    var token = jwt.sign(user, process.env.SECRET_KEY, {
                        expiresIn: 60 * 60 * 24 // expires in 24 hours
                    });
                    callback(null, {
                        "message": "thanh cong",
                        "email": user,
                        "token": token
                    })
                } else {
                    callback(null, {
                        "message": "sai thong tin"
                    })
                }
            });
        }
    });
}

function deleteUser(email, callback) {
    user.findOneAndRemove({
        email: email
    }, function(err) {
        console.log(email);
        if (err) throw err;
        else if (!email) {
            callback(null, {
                "message": "khong tim thay"
            })
        }
        callback(null, {
            "message": "xoa thanh cong"
        })
    })
}

function updateUser(request, callback) {
    var salt = crypto.randomBytes(128).toString('base64');
    crypto.pbkdf2(request.data.passUp, salt, 100000, 512, 'sha512', (err, key) => {

        user.findOneAndUpdate({
            email: request.email
        }, {
            password: key.toString('hex'),
            salt: salt,
            username: request.data.nameUp
        }, function(err, user) {
            if (err) throw err;
            callback({
                "message": "update thanh cong"
            })
        })
    })
}
