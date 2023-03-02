// do something!
const navElement = document.getElementById("activeNav");
const btnElement = document.getElementById("toggleBtn");

const btnClick = () => {
  const classes = navElement.classList;
  if (classes.contains("active")) {
    navElement.classList.toggle("active");
  } else {
    navElement.classList.toggle("active");
  }
};
