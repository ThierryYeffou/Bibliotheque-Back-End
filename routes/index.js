module.exports = (app) => {
    
    app.use("/borrowings", require("./borrowings")(app));
    app.use("/subscribers", require("./subscribers")(app));
    app.use("/books", require("./books")(app));
}