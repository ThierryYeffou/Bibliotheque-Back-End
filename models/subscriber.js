const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subscriberSchema = new Schema({

    lastName : { type: String, required: true},
    firstName: { type: String, required: true},
    mail     : String,
    phone    : { type: String, required: true},
    adress   : { type: String, required: true},
    birthDate: { type: Date, required: true},
    birthTown: String,
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
