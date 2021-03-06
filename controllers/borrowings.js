module.exports = (app) =>{

    let Borrowing = app.models.Borrowing;


    // Fonction show pour afficher un un emprunt : 
    function show(req, res) {
        Borrowing.findById(req.body.id, function (err, docs) {

            if(err) res.send(err);  
            else res.send(docs);

        })
    }
    
    function create(req, res){
        let newBorrowing = req.body
        Borrowing.create(newBorrowing, (err, borrowing) =>{
            if(err){
                res.send(err)
            }
            res.send(borrowing);
        })
    }

    function close(req,res){
        Borrowing.findByIdAndUpdate(
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

    function userBorrowings(req,res){
        let user = req.body.user;
        Borrowing.find(
            {
              user: user
            },
            function (err, borrowing) {
                if (err) {
                  res.send(err);
                } else {
                  res.send(borrowing);
                }
            }
        )
    }


    function list(req,res){
        Borrowing.find({}, function (err, borrowing) {
            if (err) {
              res.send(err);
            } else {
              res.send(borrowing);
            }
        })
    };
    return { create, close, list, show, userBorrowings } ;
};
