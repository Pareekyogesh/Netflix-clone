const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique:true
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        gender: {
            type: String,
            trim: true,
            required: true,
        },
        mobile_no: {
            type: String,
            trim: true,
            required: true,
            unique:true
        },
    },
    { timestamps: true }
);
userSchema.methods = {
    authenticate: function(plainText) {
        return plainText === this.password; //it covert user input paasword into hash and check converted password with original hash password which is related to give mail
    }
};
module.exports = mongoose.model('User', userSchema);