/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_SPRINT_ICON =
  "https://trello-power-up-sprint-number.herokuapp.com/images/icon_sprint.png";

function getColorByNumber(sprintNumber) {
  if (isNaN(parseInt(sprintNumber))) {
    sprintNumber = 0;
  }

  switch (sprintNumber) {
    case 1:
      return "#61bd4f";

    case 2:
      return "#f2d600";

    case 3:
      return "#ff9f1a";

    case 4:
      return "#eb5a46";

    case 5:
      return "#c377e0";

    case 6:
      return "#0079bf";

    case 7:
      return "#00c2e0";

    case 8:
      return "#51e898";

    case 9:
      return "#ff78cb";

    case 10:
      return "#344563";

    default:
      return "#091e420a";
  }
}

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
        if (isNaN(parseInt(sprintNumber))) {
          return;
        }

        return [
          {
            icon: BLACK_SPRINT_ICON,
            text: sprintNumber,
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
