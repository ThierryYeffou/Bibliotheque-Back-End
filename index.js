const app = require('express')();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require("./database")(app);
require("./models")(app);
require("./controllers")(app);
require("./routes")(app);

//borrowings
// const Borrowing = app.models.Musique;
//      let borrowing = new Borrowing({
//         books : ["Jean Jean", "NGUEN Dressaire"],
//         borrowingDate : new Date(),
//         maxReturnDate : new Date(),
//         realReturnDate : new Date(),
//         subscriber : ["Jean1 ", "Taldi"]
//      })
// borrowing.save();


app.listen(port, () => console.log(`Example app listening on port ${port}!`))