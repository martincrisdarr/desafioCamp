////////////////NOCTURNE MODE///////////////////////
const btnSwitch = document.querySelector("#switch");
const bodySelector = document.body;
const darkModeStorage = localStorage.getItem("darkMode");
!localStorage.getItem("darkMode")
  ? localStorage.setItem("darkMode", "false")
  : null;

const addClasses = () => {
  bodySelector.classList.add("dark");
  btnSwitch.classList.add("active");
};
const removeClasses = () => {
  bodySelector.classList.remove("dark");
  btnSwitch.classList.remove("active");
};
darkModeStorage === "true" ? addClasses() : removeClasses();

btnSwitch.addEventListener("click", () => {
  if (bodySelector.classList.contains("dark")) {
    localStorage.setItem("darkMode", "false");
    bodySelector.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
  } else {
    localStorage.setItem("darkMode", "true");
    bodySelector.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
  }
});
