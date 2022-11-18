const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("entries"),
  clearButton: document.querySelector(`#clear`),
  display: document.querySelector(".display"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = document.querySelectorAll(`#input`);
  let inputs = Array.from(input);
  const favorite = {};
  favorite.name = inputs[0].value;
  favorite.show = inputs[1].value;
  favorite.charater = inputs[2].value;
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<p> Favorite For ${favorite.name}</p>`
  );
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<p> Show:
    ${favorite.show}</p>`
  );
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<p> Charater:
    ${favorite.charater}</p>`
  );
  console.log(inputs);
  inputs.forEach((favs) => {
    favs.value = "";
  });
});

DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<h2>Person's summery here : <h2>`
);

DOMSelectors.clearButton.addEventListener("click", function () {
  location.reload();
  return false;
});
