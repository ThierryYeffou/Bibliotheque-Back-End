const router = require("express").Router();
module.exports = (app) => {
   
    router.post("/showOne", app.controllers.books.showOne);
    router.post("/updateOne", app.controllers.books.updateOne);
    router.post('/create', app.controllers.books.create);
    router.post("/remove", app.controllers.books.remove);
    router.get("/list", app.controllers.books.list);
    
    return router;
};