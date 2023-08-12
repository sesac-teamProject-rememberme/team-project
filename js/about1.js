let section3 = document.querySelector(".section3");
let a3_0 = document.querySelector(".article3-0");
let a3_1 = document.querySelector(".article3-1");
let a3_2 = document.querySelector(".article3-2");
let a3_3 = document.querySelector(".article3-3");
let a3_4 = document.querySelector(".article3-4");
let a3_5 = document.querySelector(".article3-5");
const a = [a3_0, a3_1, a3_2, a3_3, a3_4, a3_5];

let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");
let temp3 = document.querySelector(".temp3");

// section3 스크롤하면 글씨 나타나는 애니메이션
let margin = 730;
let saTriggerHeight = 0;
const saFunc = function () {
  for (let index = 0; index < 6; index++) {
    if (!a[index].classList.contains("show")) {
      saTriggerHeight = a[index].getBoundingClientRect().top + margin;

      if (window.innerHeight > saTriggerHeight) {
        a[index].classList.add("show");
      }
    }
  }
};

window.addEventListener("scroll", saFunc);
// 스크롤 할 때마다 함수가 실행됨 (여러번 반복됨)

// let observer1 = new IntersectionObserver((e) => {
//   e.forEach((a) => {
//     // 관찰 대상이 뷰포트에 들어온 경우
//     if (a.intersectionRatio > 0) {
//       // 클래스에 show 추가
//       a.target.classList.add("show");
//     }
//     // 관찰 대상이 뷰포트 밖으로 나가는 경우
//     else {
//       // 클래스에서 show 제거
//       a.target.classList.remove("show");
//     }
//   });
// });

// const boxElemList = document.querySelectorAll(".sa");
// boxElemList.forEach((a) => observer1.observe(a));
