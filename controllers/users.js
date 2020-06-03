module.exports = (app) =>{

    let User = app.models.user;


    // Fonction show pour afficher un un emprunt : 
    function showOne(req, res) {
        User.findById(req.body.id, function (err, docs) {

            if(err) res.send(err);  
            else res.send(docs);

        })
    }
    
    function create(req, res){
        let newUser = req.body
        User.create(newUser, (err, user) =>{
            if(err){
                res.send(err)
            }
            res.send(user);
        })
    }

    function list(req,res){
        User.find({}, function (err, user) {
            if (err) {
              res.send(err);
            } else {
              res.send(user);
            }
        })
    };

    function remove(req,res){
        User.findByIdAndRemove(req.body.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }

    function updateOne(req,res){
        User.updateOne({_id: req.body.id},{$set: req.body},(err,doc) => {
            if (err) {
                res.send(err);
              } else {
                res.send(doc);
              }
        });
    }
    return { create, list, showOne, remove, updateOne } ;
};
