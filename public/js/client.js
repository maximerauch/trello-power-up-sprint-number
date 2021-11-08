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
            text: sprintNumber || "Non défini",
            color: sprintNumber ? null : "red",
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
