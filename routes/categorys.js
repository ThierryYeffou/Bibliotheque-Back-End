const router = require("express").Router();
module.exports = (app) => {
   
    router.post("/show", app.controllers.categorys.show);
    router.post('/create', app.controllers.categorys.create);
    router.post("/close", app.controllers.categorys.close);
    router.get("/list", app.controllers.categorys.list);
    
    return router;
};