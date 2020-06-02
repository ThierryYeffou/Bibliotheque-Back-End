const router = require("express").Router();
module.exports = (app) => {
    const Borrowing = require("../models/borrowing");

    router.post('/create', app.controllers.borrowings.create);
    router.post("/close", app.controllers.borrowings.close);
    router.post("/list", app.controllers.borrowings.list);
    
    return router;
};