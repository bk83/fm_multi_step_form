window.addEventListener('load', function () {
  setButtonHeight();
});

window.addEventListener('resize', function () {
  setButtonHeight();
});


const setButtonHeight = () => {
  const screenSize = window.innerWidth;
  const height = document.getElementById("step-container").offsetHeight;
  const target = document.getElementById("button-container");
  var windowHeight = document.documentElement.clientHeight;
  if (screenSize < 600) {
    target.style.position = "absolute";
    var px = 48 + height + 80;
    if (px < windowHeight - 40) {
      target.style.bottom = "0";
      target.style.top = "unset";
    } else {
      target.style.top = `${px}px`;
      target.style.bottom = "unset";
    }
  } else {
    target.style.position = "static";
    target.style.bottom = "unset";
  }
}