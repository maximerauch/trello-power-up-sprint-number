var express = require("express");

var app = express();

["sprint-number", "error-type"].forEach((name) => {
  var folder = __dirname + "/power-ups/" + name;
  app.use(express.static(folder));

  app.get("/" + name, function (request, response) {
    response.sendFile(folder + "/views/index.html");
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
