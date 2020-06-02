const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subscriberSchema = new Schema({

    lastName : String,
    firstName: String,
    mail     : String,
    phone    : String,
    adress   : String,
    birthDate: Date,
    birthTown: String,
});

module.exports = mongoose.model("Subscriber", subscriberSchema);