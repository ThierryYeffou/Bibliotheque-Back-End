module.exports = (app) => {
    app.models = {
        Borrowing: require("./Borrowing"),
        Subscriber: require('./Subscriber'),
        Book: require('./Book'),
    };
}