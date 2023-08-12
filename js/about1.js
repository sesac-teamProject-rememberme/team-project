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

// section3 스크롤하면 글씨 나타나는 애니메이션
let margin = 700;
//window.innerheight = 739px
let saTriggerHeight = 0;
const saFunc = function () {
  for (let index = 0; index < 5; index++) {
    if (!a[index].classList.contains("show")) {
      saTriggerHeight = a[index].getBoundingClientRect().top + margin;
      console.log(index);
      console.log(saTriggerHeight);

      if (window.innerHeight > saTriggerHeight) {
        a[index].classList.add("show");
      }
    }
  }
};

window.addEventListener("scroll", saFunc);
