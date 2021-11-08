/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: "images/icon_sprint.png",
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
        return [
          {
            icon: "images/icon_sprint.png",
            text: sprintNumber,
          },
        ];
      });
  },
});
