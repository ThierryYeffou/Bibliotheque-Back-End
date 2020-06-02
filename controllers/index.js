module.exports = (app) => {
    app.controllers = {
        borrowings: require("./borrowings")(app),
        subscribers: require('./subscribers')(app),
    //     books: require('./books')(app),
    };
}