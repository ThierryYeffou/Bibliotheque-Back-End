module.exports = (app) => {
    app.models = {
        Borrowing: require("./Borrowing"),
        Book: require('./Book'),
        Subscriber: require('./Subscriber'),
        Category: require('./Category')
    };
}