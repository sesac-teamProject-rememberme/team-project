let section3 = document.querySelector(".section3");
let a3_1 = document.querySelector(".article3-1");
let a3_2 = document.querySelector(".article3-2");
let a3_3 = document.querySelector(".article3-3");
let a3_4 = document.querySelector(".article3-4");
let a3_5 = document.querySelector(".article3-5");
const a = [a3_1, a3_2, a3_3, a3_4, a3_5];

let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");
let temp3 = document.querySelector(".temp3");

// section3 스크롤하면 애니메이션 실행
const saDefaultMargin = 300;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll(".sa");

const saFunc = function () {
  for (let index = 0; index < 5; index++) {
    if (!a[index].classList.contains("show")) {
      if (a[index].dataset.saMargin) {
        saTriggerMargin = parseInt(a[index].dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }
      // 기준 => article3-1의 sa-trigger
      if (a[index].dataset.saTrigger) {
        saTriggerHeight =
          document
            .querySelector(a[index].dataset.saTrigger)
            .getBoundingClientRect().top + saTriggerMargin;
      } else {
        // saTriggerHeight =a[index].getBoundingClientRect().top + saTriggerMargin;
        saTriggerHeight = a[index].getBoundingClientRect().top;
      }

      if (window.innerHeight > saTriggerHeight) {
        a[index].classList.add("show");
      }
    }
  }
};

window.addEventListener("load", saFunc);
window.addEventListener("scroll", saFunc);
