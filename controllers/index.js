module.exports = (app) => {
    app.controllers = {
        borrowings: require("./borrowings")(app),
    };
}