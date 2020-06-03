module.exports = (app) => {
    app.models = {
        Borrowing: require("./Borrowing"),
        Book: require('./Book'),
        User: require('./User'),
        Category: require('./Category')
    };
}