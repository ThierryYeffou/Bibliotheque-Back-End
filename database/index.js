const mongoose = require("mongoose");
module.exports = (app) => {
    mongoose.connect(
        "mongodb://localhost:27017/bibliotheque",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Connexion à la base de données réussie");
            }
        }
    )
};