const router = require("express").Router();
module.exports = (app) => {

    router.post("/show", app.controllers.subscribers.show);
    router.post('/create', app.controllers.subscribers.create);
    router.post("/update", app.controllers.subscribers.update);
    router.get("/list", app.controllers.subscribers.list);
    
    return router;
};