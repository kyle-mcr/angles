const express = require('express'),
    path = require('path'),
    request = require('request'),
    app = express();
    


// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
// }));
app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.json());

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public//public/index.html"))
});

app.listen(8000, () => console.log('listening on port 8000'));