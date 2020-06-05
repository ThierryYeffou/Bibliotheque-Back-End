const app = require('express')();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

require("./database")(app);
require("./models")(app);
require("./controllers")(app);
require("./routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))