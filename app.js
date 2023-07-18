"use strict";
var imgs = document.getElementsByTagName("img");
var showIndex = 0;

function prewBtn() {
  imgs[showIndex].style.display = "none";
  showIndex--;

  if (showIndex < 0) {
    showIndex = imgs.length - 1;
  }

  imgs[showIndex].style.display = "block";
}

function nextBtn() {
  imgs[showIndex].style.display = "none";
  showIndex++;

  if (showIndex >= imgs.length) {
    showIndex = 0;
  }

  imgs[showIndex].style.display = "block";
}
