const router = require("express").Router();
module.exports = (app) => {

    router.post("/showOne", app.controllers.subscribers.showOne);
    router.post('/create', app.controllers.subscribers.create);
    router.post("/updateOne", app.controllers.subscribers.updateOne);
    router.post("/remove", app.controllers.subscribers.remove);
    router.get("/list", app.controllers.subscribers.list);
    
    
    return router;
};