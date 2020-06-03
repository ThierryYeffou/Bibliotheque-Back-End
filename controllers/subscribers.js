module.exports = (app) =>{

    let Subscriber = app.models.Subscriber;


    // Fonction show pour afficher un un emprunt : 
    function showOne(req, res) {
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

    function updateOne(req,res){
        Subscriber.updateOne({_id: req.body.id},{$set: req.body},(err,doc) => {
            if (err) {
                res.send(err);
              } else {
                res.send(doc);
              }
        });
    }
    return { create, list, showOne, remove, updateOne } ;
};
