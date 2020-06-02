module.exports = (app) =>{

    let Category = app.models.Category;


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
        Category.findByIdAndDelete(
            req.body.id,
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

    function updateOne(req,res){
        Category.updateOne({_id: req.body.id},{$set: req.body},(err,doc) => {
            if (err) {
                res.send(err);
              } else {
                res.send(doc);
              }
        });
    }
    return { create, remove, list, showOne, updateOne} ;
};
