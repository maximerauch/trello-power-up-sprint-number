var t = TrelloPowerUp.iframe();

window.sprintNumberSave.addEventListener("click", function (event) {
  event.preventDefault();
  return updateValue(window.sprintNumberField.value);
});

window.sprintNumberReset.addEventListener("click", function (event) {
  event.preventDefault();
  return updateValue("");
});

t.render(function () {
  return t.get("card", "shared", "sprintNumber").then(function (sprintNumber) {
    window.sprintNumberField.value = sprintNumber;
  });
});

function updateValue(value) {
  return t.set("card", "shared", "sprintNumber", value).then(function () {
    t.closePopup();
  });
}
