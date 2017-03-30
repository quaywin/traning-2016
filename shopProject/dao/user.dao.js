var User = require('./../models/user.model');

module.exports = {
    login: login,
    signup: signup,
    deleteUser: deleteUser,
    updateUser: updateUser
}

function signup(request, callback) {
    // console.log(request);
    User.createUser(request, function(err, response) {
        if (err) callback(err);
        else {
            callback(null, {
                data: response
            })
        }
    })
}


function login(request, callback) {
  // console.log(request);
    User.findOne(request, function(err, response) {
        if (err) callback(err);
        else {
            callback(null, {
                data: response
            })
        }
    })
}

function deleteUser(username, callback) {
    User.deleteUser(username, function(err, response) {
        if (err) callback(err);
        else {
            callback(null, {
                data: response
            })
        }
    })
}

function updateUser(request, callback) {
    User.updateUser(request, function(err, response) {
        if (err) callback(err);
        else {
            callback(null, {
                data: response
            })
        }
    })
}
