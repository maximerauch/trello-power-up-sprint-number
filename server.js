var express = require("express");

var app = express();

app.get("/:name", function (request, response) {
  response.sendFile(
    __dirname + "/power-ups/" + request.params.name + "/views/index.html"
  );
});

var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
