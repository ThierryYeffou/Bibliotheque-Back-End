module.exports = (app) => {
    app.controllers = {
        borrowings: require("./borrowings")(app),
        subscribers: require('./subscribers')(app),
        categorys: require('./categorys')(app),
        books: require('./books')(app),
    };
}