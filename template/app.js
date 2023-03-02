// do something!
const navElement = document.getElementById("activeNav");
const btnElement = document.getElementById("toggleBtn");
const bodyElement = document.getElementById("activeBody");

window.onload = () => {
  const active = getCookie("active");
  if (active === "true") {
    navElement.classList.toggle("active");
  }
  setTimeout(() => {
    bodyElement.style.visibility = "visible";
    bodyElement.classList.remove("preload");
  }, 100);
};

window.onunload = () => {
  if (className.includes("active")) {
    setCookie("active", "true", 1);
  } else {
    setCookie("active", "false", 1);
  }
};

function btnClick() {
  const className = navElement.className;
  if (className.includes("active")) {
    navElement.classList.toggle("active", false);
    setCookie("active", "false", 1);
  } else {
    navElement.classList.toggle("active", true);
    setCookie("active", "true", 1);
  }
}

// 쿠키 저장하기
function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

// 쿠키 가져오기
function getCookie(cName) {
  cName = cName + "=";
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = "";
  if (start != -1) {
    start += cName.length;
    var end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}
function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}
