const router = require("express").Router();
module.exports = (app) => {
    const Borrowing = require("../models/borrowing");

    router.post('/create', app.controllers.borrowing.create);
    
    return router;
};