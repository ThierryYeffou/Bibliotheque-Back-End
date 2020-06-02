const router = require("express").Router();
module.exports = (app) => {
   
    router.post("/show", app.controllers.books.show);
    router.post('/create', app.controllers.books.create);
    router.post("/close", app.controllers.books.close);
    router.get("/list", app.controllers.books.list);
    
    return router;
};