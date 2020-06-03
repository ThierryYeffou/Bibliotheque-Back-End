const app = require('express')();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require("./database")(app);
require("./models")(app);
require("./controllers")(app);
require("./routes")(app);

<<<<<<< HEAD
//borrowings
// const Borrowing = app.models.Musique;
//      let borrowing = new Borrowing({
//         books : ["Jean Jean", "NGUEN Dressaire"],
//         borrowingDate : new Date(),
//         maxReturnDate : new Date(),
//         realReturnDate : new Date(),
//         user : ["Jean1 ", "Taldi"]
//      })
// borrowing.save();


=======
>>>>>>> a8c2b57a2cd30eca96a4812d7eb3314ac1fcf82c
app.listen(port, () => console.log(`Example app listening on port ${port}!`))