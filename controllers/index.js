module.exports = (app) => {
    app.controllers = {
        borrowings: require("./borrowings")(app),
        users: require('./users')(app),
        categorys: require('./categorys')(app),
        books: require('./books')(app)
    };
}