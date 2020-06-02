const app = require('express')();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// require("./controllers")(app);
require("./routes")(app);
require("./database")(app);
// require("./models")(app);

app.listen(port, () => console.log(`Example app listening on port port!`))