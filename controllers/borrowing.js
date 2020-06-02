module.exports = (app) =>{

    function create(req, res){
        let newBorrowing = req.body
        Borrowing.create(newBorrowing, (err, borrowing) =>{
            if(err){
                res.send(err)
            }
            res.send(borrowing);
        })
    }

    return{create};
};