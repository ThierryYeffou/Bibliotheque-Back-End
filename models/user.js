const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({

    lastName : { type: String, required: true},
    firstName: { type: String, required: true},
    mail     : { type: String, unique: true},
    password : String,
    phone    : { type: String, required: true},
    adress   : { type: String, required: true},
    birthDate: { type: Date, required: true},
    birthTown: String,
    role: String, // Can be "user", "employee" or "admin",
});

module.exports = mongoose.model("User", userSchema);
