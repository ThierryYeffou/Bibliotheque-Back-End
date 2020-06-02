module.exports = (app) =>{

    let Category = require('../models/Category');


    // Fonction showOne pour afficher un un emprunt : 
    function showOne(req, res) {
        Category.findById(req.body.id, function (err, docs) {

            if(err) res.send(err);  
            else res.send(docs);

        })
    }
    
    function create(req, res){
        let newCategory = req.body
        Category.create(newCategory, (err, Category) =>{
            if(err){
                res.send(err)
            }
            res.send(Category);
        })
    }

    function remove(req,res){
        Category.findByIdAndUpdate(
            req.body.id,
            {
                $set: req.body.realReturnDate
            },
            (err, data) => {
                if (err) console.log(err);
                else res.send(data);
            }
        );
    }


    function list(req,res){
        Category.find({}, function (err, Category) {
            if (err) {
              res.send(err);
            } else {
              res.send(Category);
            }
        })
    };
    return { create, remove, list, showOne} ;
};
