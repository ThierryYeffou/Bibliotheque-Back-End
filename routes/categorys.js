const router = require("express").Router();
module.exports = (app) => {
   
    router.post("/showOne", app.controllers.categorys.showOne);
    router.post('/create', app.controllers.categorys.create);
    router.post("/remove", app.controllers.categorys.remove);
    router.get("/list", app.controllers.categorys.list);
    
    return router;
};