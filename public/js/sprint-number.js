/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.sprintNumberForm.addEventListener("submit", function (event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
    .set("card", "shared", "sprintNumber", window.sprintNumberSelect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("card", "shared", "sprintNumber")
    .then(function (sprintNumber) {
      window.sprintNumberSelect.value = sprintNumber;
    })
    .then(function () {
      t.sizeTo("#sprintNumberForm");
    });
});
