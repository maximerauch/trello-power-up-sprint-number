var t = TrelloPowerUp.iframe();

t.render(function () {
  return t.get("card", "shared", "sprintNumber").then(function (sprintNumber) {
    t.sizeTo("#content");

    if (isNaN(parseInt(sprintNumber))) {
      sprintNumber = 0;
    }

    window["sprintNumber" + sprintNumber].classList.add("btn-selected");
  });
});

function updateValue(value) {
  console.log(getColorByNumber(value));
  return t.set("card", "shared", "sprintNumber", value).then(function () {
    t.closePopup();
  });
}

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
