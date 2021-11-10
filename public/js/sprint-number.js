var t = TrelloPowerUp.iframe();

t.render(function () {
  return t.get("card", "shared", "sprintNumber").then(function (sprintNumber) {
    if (isNaN(parseInt(sprintNumber))) {
      sprintNumber = 0;
    }

    window["sprintNumber" + sprintNumber].classList.add("btn-selected");
  });
});

function updateValue(value) {
  return t.set("card", "shared", "sprintNumber", value).then(function () {
    t.closePopup();
  });
}
