const router = require("express").Router();
module.exports = (app) => {

    router.post("/showOne", app.controllers.users.showOne);
    router.post('/create', app.controllers.users.create);
    router.post("/updateOne", app.controllers.users.updateOne);
    router.post("/remove", app.controllers.users.remove);
    router.post("/connect", app.controllers.users.connect);
    router.get("/list", app.controllers.users.list);
    
    
    return router;
};