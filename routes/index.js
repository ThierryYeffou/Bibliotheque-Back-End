module.exports = (app) => {
    
    app.use("/borrowings", require("./borrowings")(app));
    app.use("/categorys", require("./categorys")(app));
    app.use("/users", require("./users")(app));
    app.use("/books", require("./books")(app));
}