var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("*", function (request, response) {
    response.sendFile(__dirname + "/views/index.html");
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});
