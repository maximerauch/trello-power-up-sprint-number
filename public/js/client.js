/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_SPRINT_ICON =
  "https://trello-power-up-sprint-number.herokuapp.com/images/icon_sprint.png";

TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: BLACK_SPRINT_ICON,
        text: "Sprint Number",
        callback: function (t) {
          return t.popup({
            title: "Définir le n° du sprint",
            url: "views/sprint-number.html",
          });
        },
      },
    ];
  },

  "card-badges": function (t, options) {
    return t
      .get("card", "shared", "sprintNumber")
      .then(function (sprintNumber) {
        var value = parseInt(sprintNumber);

        if (isNaN(value) || value === 0) {
          return;
        }

        return [
          {
            icon: BLACK_SPRINT_ICON,
            text: sprintNumber,
            color: getColorByNumber(sprintNumber),
          },
        ];
      });
  },

  "card-detail-badges": function (t, options) {
    return t
      .get("card", "shared", "sprintNumber")
      .then(function (sprintNumber) {
        return [
          {
            title: "Sprint",
            text: sprintNumber ? ("0" + sprintNumber).slice(-2) : "Aucun",
            color: getColorByNumber(sprintNumber),
            callback: function (t) {
              return t.popup({
                title: "Définir le n° du sprint",
                url: "views/sprint-number.html",
              });
            },
          },
        ];
      });
  },
});

function getColorByNumber(sprintNumber) {
  if (isNaN(parseInt(sprintNumber))) {
    sprintNumber = 0;
  }

  switch (sprintNumber) {
    case 1:
      console.log("red");
      return "red";

    case 2:
      console.log("yellow");
      return "yellow";

    case 3:
      console.log("orange");
      return "orange";

    case 4:
      console.log("red");
      return "red";

    case 5:
      console.log("purple");
      return "purple";

    case 6:
      console.log("blue");
      return "blue";

    case 7:
      console.log("sky");
      return "sky";

    case 8:
      console.log("lime");
      return "lime";

    case 9:
      console.log("pink");
      return "pink";

    case 10:
      console.log("black");
      return "black";

    default:
      console.log("null");
      return null;
  }
}
