var express = require("express");

var app = express();

["sprint-number", "error-type"].forEach((name) => {
  app.get("/" + name, function (request, response) {
    response.sendFile(__dirname + "/power-ups/" + name + "/views/index.html");
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
