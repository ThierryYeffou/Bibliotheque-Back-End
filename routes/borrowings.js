const router = require("express").Router();
module.exports = (app) => {

    router.post("/show", app.controllers.borrowings.show);
    router.post('/create', app.controllers.borrowings.create);
    router.post("/close", app.controllers.borrowings.close);
    router.get("/list", app.controllers.borrowings.list);
    
    return router;
};