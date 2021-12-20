/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ERROR_ICON =
  window.location.protocol +
  "//" +
  window.location.hostname +
  "/images/icon_error.png";

TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: BLACK_ERROR_ICON,
        text: "Type d'erreur",
        callback: function (t) {
          return t.popup({
            title: "Définir le type d'erreur",
            url: "views/error-type/iframe.html",
          });
        },
      },
    ];
  },

  "card-badges": function (t, options) {
    return t.get("card", "shared", "errorType").then(function (errorType) {
      var error = getErrorByType(errorType);

      if (!error) {
        return;
      }

      return [
        {
          icon: BLACK_ERROR_ICON,
          text: error.label,
          color: error.color,
        },
      ];
    });
  },

  "card-detail-badges": function (t, options) {
    return t.get("card", "shared", "errorType").then(function (errorType) {
      var error = getErrorByType(errorType);

      if (!error) {
        return;
      }

      return [
        {
          title: "Type d'erreur",
          text: error.label,
          color: error.color,
          callback: function (t) {
            return t.popup({
              title: "Définir le type d'erreur",
              url: "views/error-type/iframe.html",
            });
          },
        },
      ];
    });
  },
});

function getErrorByType(errorType) {
  switch (errorType) {
    case "minor":
      return {
        type: "minor",
        label: "Mineure",
        color: "yellow",
      };

    case "major":
      return {
        type: "major",
        label: "Majeure",
        color: "red",
      };

    default:
      return null;
  }
}
