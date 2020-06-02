const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var borrowingSchema = new Schema({
    /*books : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: true
        },
    ],*/
    borrowingDate : {
        type: Date,
        required: true
    },
    maxReturnDate :  {
        type: Date,
        required: true
    },
    realReturnDate: Date,
    /*subscriber: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subscriber',
            required: true
        },
    ],*/
});

module.exports = mongoose.model("Borrowing", borrowingSchema);