// do something!
const navElement = document.getElementById("activeNav");
const btnElement = document.getElementById("toggleButton");

const btnClick = () => {
  const className = navElement.classList;
  if (className.contains("active")) {
    navElement.classList.toggle("active", false);
  } else {
    navElement.classList.toggle("active", true);
  }
};
