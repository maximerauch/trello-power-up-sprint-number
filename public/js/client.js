/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_SPRINT_ICON = window.location.hostname + "/images/icon_sprint.png";

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
            text: sprintNumber || "Aucun",
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
      return "red";

    case 2:
      return "yellow";

    case 3:
      return "orange";

    case 4:
      return "red";

    case 5:
      return "purple";

    case 6:
      return "blue";

    case 7:
      return "sky";

    case 8:
      return "lime";

    case 9:
      return "pink";

    default:
      return null;
  }
}
