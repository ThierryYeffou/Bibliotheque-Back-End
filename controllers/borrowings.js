module.exports = (app) =>{
    let Borrowing = require('../models/Borrowing');
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
                realReturnDate: req.body.realReturnDate
            },
            (err, data) => {
                if (err) console.log(err);
                else res.send(data);
            }
        );
    }

    return { create, close };
};
