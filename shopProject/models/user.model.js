var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    email: {
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
    username: {
        type: String,
        required: true
    }
});
var user = mongoose.model('user', userSchema);

module.exports = user;
