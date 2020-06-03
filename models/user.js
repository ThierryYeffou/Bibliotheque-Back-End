const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    lastName : { type: String, required: true},
    firstName: { type: String, required: true},
    mail     : String,
    password : String,
    phone    : { type: String, required: true},
    adress   : { type: String, required: true},
    birthDate: { type: Date, required: true},
    birthTown: String,
    role: String // Can be "user" or "user"
});

module.exports = mongoose.model("User", UserSchema);
