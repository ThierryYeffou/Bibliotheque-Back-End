module.exports = (app) =>{

    let User = app.models.User;

    /*function isConnected(user){
        if (User.find({mail: user.mail, password: user.password},function (err, data) {
            if (err) {
              res.send(err);
            } else {
              res.send(data);
            }
        }
        )) {user = 
            return true; }
        return false;
    } */
    function connect(req, res){
        let mail = req.body.mail;
        let password = req.body.password;
        User.findOne({mail: mail}, function (err, user) {
            if (err) {
                res.send(err);
            } else {
                if (!user) res.send("L\'adresse mail renseignée est incorrecte.");
                else { 
                    User.findOne({mail: mail, password: password}, function (err, user){
                        if (err){
                            res.send(err);
                        } else {
                            if (!user) res.send("L\'adresse mail et le mot de passe ne correspondent pas."); 
                            else res.send("Bienvenue");
                        }
                    })

              }
            }  
        }) 
    } 
     
            
    
    
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
    return { create, list, showOne, remove, updateOne, connect } ;
};
