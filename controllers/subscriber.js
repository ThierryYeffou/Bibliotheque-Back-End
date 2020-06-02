module.exports = (app) =>{

    let Subscriber = require('../models/Subscriber');


    // Fonction show pour afficher un un emprunt : 
    function show(req, res) {
        Subscriber.findById(req.body.id, function (err, docs) {

            if(err) res.send(err);  
            else res.send(docs);

        })
    }
    
    function create(req, res){
        let newSubscriber = req.body
        Subscriber.create(newSubscriber, (err, subscriber) =>{
            if(err){
                res.send(err)
            }
            res.send(subscriber);
        })
    }

    function list(req,res){
        Subscriber.find({}, function (err, subscriber) {
            if (err) {
              res.send(err);
            } else {
              res.send(subscriber);
            }
        })
    };

    function remove(req,res){
        Subscriber.findByIdAndRemove(req.body.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }
    return { create, list, show, remove} ;
};
