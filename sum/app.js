const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

//get tells the server what to do when the server gets a request from that route
//req gets somemthing from a request, contains info part of the request. Res  is what it needs to send back
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//start server and make it listen to requests, takes port number
app.listen(port, () => {
    console.log(`app listening on port${port}`)
})

app.use(express.static(__dirname))
