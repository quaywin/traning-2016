var mongoose = require('./../config/db.config')
var jwt = require('jsonwebtoken')
var Schema = mongoose.Schema;
// var crypto=require('crypto');
var bcrypt = require('bcrypt');
var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    fullname: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    console.log("taone:" + this.password);
    var user = this;
    this.hashPassword(user.password, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
})
userSchema.methods.hashPassword = function(password, cb) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return cb(err);
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) return cb(err);
            return cb(null, hash);
        })
    })
}
userSchema.methods.comparePassword = function(password, hashedPass, cb) {
    bcrypt.compare(password, hashedPass, function(err, isMatch) {
        if (err) return cb(err);
        return cb(null, isMatch);
    })
}
var user = mongoose.model('user', userSchema);

module.exports = {
    findOne: findOne,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}

function createUser(request, callback) {
    // console.log(crypto.getHashes());
    // var salt = crypto.randomBytes(128).toString('base64');
    // const key = crypto.pbkdf2Sync(request.pass, salt, 100000, 512, 'sha512').toString('hex');
    // console.log(salt);
    // console.log(request);
    var newUser = user({
        username: request.user,
        password: request.pass,
        // salt:salt,
        fullname: request.name
    })
    if (request.user == "" || request.pass == "" || request.name == "") {
        callback({
            "message": "thieu thong tin"
        })
    } else {
        newUser.save(function(err) {
            if (err) throw err;
            callback(null, {
                "message": "thanh cong"
            })
            console.log('User created');
        })
    }
}

function findOne(request, callback) {
    // console.log(request.user+"2321321");
    user.findOne({
        username: request.user
    }, function(err, user) {
        if (err) throw err;
        else {
            console.log(user);
            user.comparePassword(request.pass, user.password, function(err, isMatch) {
                    console.log(request.pass + "tao ne" + user.password);
                    if (err) return callback(err);
                    if (!isMatch) {
                        return callback(null, false, { "message": "sai thong tin" })
                    }
                    var token = jwt.sign(user, process.env.SECRET_KEY, {
                        expiresIn: 60 * 60 * 24 // expires in 24 hours
                    });
                    callback(null, {
                        "message": "thanh cong",
                        "user": request.user,
                        "token": token
                    })
                })
                // var passReq=crypto.pbkdf2Sync(request.pass,user.salt, 100000, 512, 'sha512').toString('hex');
        }
    })
}

function deleteUser(username, callback) {
    console.log(username);
    user.findOneAndRemove({ username: username }, function(err) {
        if (err) throw err;
        callback(null, {
            "message": "xoa thanh cong"
        })
    })

}

function updateUser(request, callback) {
    user.findOneAndUpdate({
        username: request.user
    }, {
        password: request.data.passUp,
        fullname: request.data.nameUp
    }, function(err, user) {
        if (err) throw err;
        callback({
            "message": "update thanh cong"
        })
    })
}