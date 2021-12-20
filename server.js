var express = require("express");

var app = express();

app.use(express.static("public"));

["sprint-number", "error-type"].forEach((name) => {
  app.get("/" + name, function (request, response) {
    console.log("Load power-up :", name);
    response.sendFile(__dirname + "/public/views/" + name + "/index.html");
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
