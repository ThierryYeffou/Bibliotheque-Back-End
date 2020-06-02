module.exports = (app) => {
    
    app.use("/borrowings", require("./borrowings")(app));
}