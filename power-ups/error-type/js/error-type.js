var t = TrelloPowerUp.iframe();

t.render(function () {
  return t.get("card", "shared", "errorType").then(function (errorType) {
    t.sizeTo("#content");

    window["errorType" + errorType].classList.add("btn-selected");
  });
});

function updateValue(value) {
  return t.set("card", "shared", "errorType", value).then(function () {
    t.closePopup();
  });
}
