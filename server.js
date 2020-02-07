const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));


app.listen(8000, () => console.log("listening on port 8000"));