const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var borrowingSchema = new Schema({
    books : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        },
    ],
    borrowingDate : Date,
    maxReturnDate : Date,
    realReturnDate: Date,
    subscriber: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subscriber'
        },
    ],
});

module.exports = mongoose.model("Borrowing", borrowingSchema);