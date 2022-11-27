const DOMSelectors = {
  enter: document.getElementById("enter-button"),
  box: document.getElementById("container"),
  nameinput: document.querySelector("#user-name"),
  birthdayinput: document.querySelector("#user-birthday"),
  zodiacinput: document.querySelector("#user-zodiac"),
  form: document.getElementById("form"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameinput = DOMSelectors.nameinput.value;
  let birthdayinput = DOMSelectors.birthdayinput.value;
  let zodiacinput = DOMSelectors.zodiacinput.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<section class="user-box" id="user-box">
  <div class="display-card">
  <h2 class="user-box-name">${nameinput}</h2>
  <p class="user-box-birthday">${birthdayinput}</p>
  <p class="user-box-zodiac">${zodiacinput}</p>
  <button id="remove-btn">Remove</button>
  </div>
 </section>`
  );
  const element = document.getElementById("user-box");
  const remove = document.getElementById("remove-btn");
  remove.addEventListener("click", function () {
    element.remove();
  });
});
