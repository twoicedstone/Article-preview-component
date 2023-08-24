const navigator = document.getElementById("nav");
const shareIcon = document.getElementById("link");
const userInfo = document.getElementById("footer");
const shareIcon2 = document.getElementById("link2");
const share = document.getElementById("buttonclose");
const mobileUserinfo = document.getElementById("footer2");

shareIcon2.addEventListener("click", () => {
  if (navigator.style.display == "flex") {
    navigator.style.display = "none";
  } else {
    navigator.style.display = "flex";
    return true;
  }
});

shareIcon.addEventListener("click", () => {
  userInfo.style.display = "none";
  navigator.style.display = "flex";
});

share.addEventListener("click", () => {
  userInfo.style.display = "flex";
  navigator.style.display = "none";
});

window.onresize = function () {
  location.reload();
};
