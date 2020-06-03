const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var borrowingSchema = new Schema({
    books : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        },
    ],
    borrowingDate : {
        type: Date,
        required: true
    },
    maxReturnDate :  {
        type: Date,
        required: true
    },
    realReturnDate: Date,
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
});

module.exports = mongoose.model("Borrowing", borrowingSchema);