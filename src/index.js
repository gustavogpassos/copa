const express = require('express');

const app = express();

const { router } = require("./routes/index");
const mongose = require("./utils/database")(app);

app.use(express.json());
app.use(router);

app.listen(3000);