const router = require("express").Router();
module.exports = (app) => {
    const Borrowing = require("../models/borrowing");

    router.post("/show", app.controllers.borrowings.show);
    router.post('/create', app.controllers.borrowings.create);
    router.post("/close", app.controllers.borrowings.close);
    
    return router;
};