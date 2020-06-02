const router = require("express").Router();
module.exports = (app) => {

    router.post("/show", app.controllers.subscriber.show);
    router.post('/create', app.controllers.subscriber.create);
    router.post("/update", app.controllers.subscriber.update);
    router.get("/list", app.controllers.subscriber.list);
    
    return router;
};