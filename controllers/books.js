module.exports = (app) =>{

    let Book = require('../models/Book');


    // Fonction show pour afficher un un emprunt : 
    function showOne(req, res) {
        Book.findById(req.body.id, function (err, book) {

            if(err) res.send(err);  
            else res.send(book);

        })
    }
    
    function create(req, res){
        let newBook = req.body
        Book.create(newBook, (err, book) =>{
            if(err){
                res.send(err)
            }
            res.send(book);
        })
    }

    function list(req,res){
        Book.find({}, function (err, book) {
            if (err) {
              res.send(err);
            } else {
              res.send(book);
            }
        })
    };

    function remove(req,res){
        Book.findByIdAndRemove(req.body.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }

    function updateOne(req,res){
        Book.updateOne(req.body.id,{$set: req.body},(err,doc) => {
            if (err) {
                res.send(err);
              } else {
                res.send(doc);
              }
        });
    }
    return { create, list, showOne, remove, updateOne } ;
};
