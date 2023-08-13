// section3 스크롤하면 글씨 나타나는 애니메이션
let a3_0 = document.querySelector(".article3-0");
let a3_1 = document.querySelector(".article3-1");
let a3_2 = document.querySelector(".article3-2");
let a3_3 = document.querySelector(".article3-3");
let a3_4 = document.querySelector(".article3-4");
let a3_5 = document.querySelector(".article3-5");
const a = [a3_0, a3_1, a3_2, a3_3, a3_4, a3_5];

let margin = 700;
let saTriggerHeight = 0;
const saFunc = function () {
  for (let index = 0; index < 6; index++) {
    if (!a[index].classList.contains("show")) {
      saTriggerHeight = a[index].getBoundingClientRect().top + margin;

      if (window.innerHeight > saTriggerHeight) {
        a[index].classList.add("show");
      }
      // if (index >= 1) {
      //   if (a[index - 1].classList.contains("show")) {
      //     a[index - 1].classList.remove("show");
      //   }
      // }
    }
  }
};

// window.addEventListener("onload", saFunc);
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

// section4 스크롤시 애니메이션
let a4_1 = document.querySelector(".article4-1");
let a4_2 = document.querySelector(".article4-2");
let a4_3 = document.querySelector(".article4-3");
let a4_4 = document.querySelector(".article4-4");
let cloud = document.querySelector("#cloud");

let a4_1margin = 50;
let a4_2margin = 50;
let a4_3margin = 100;
let a4_4margin = 150;
let a4_1height = 0;
let a4_2height = 0;
let a4_3height = 0;
let a4_4height = 0;

const Func4_1 = function () {
  a4_1height = a4_1.getBoundingClientRect().top + a4_1margin;
  if (window.innerHeight > a4_1height) {
    a4_1.style.opacity = "1";
    a4_1.style.transition = "1s";
    a4_1.style.marginTop = "40px";
    cloud.style.transform = "translate(500px, 0px)";
    cloud.style.scale = "1.6";
    cloud.style.transition = "1s";
  }
};
window.addEventListener("scroll", Func4_1);

const Func4_2 = function () {
  a4_2height = a4_2.getBoundingClientRect().top + a4_2margin;
  if (window.innerHeight > a4_2height) {
    a4_2.style.opacity = "1";
    a4_2.style.transition = "1.2s";
    a4_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func4_2);

const Func4_3 = function () {
  a4_3height = a4_3.getBoundingClientRect().top + a4_3margin;
  if (window.innerHeight > a4_3height) {
    a4_3.style.opacity = "1";
    a4_3.style.transition = "1.2s";
  }
};
window.addEventListener("scroll", Func4_3);

const Func4_4 = function () {
  a4_4height = a4_4.getBoundingClientRect().top + a4_4margin;
  if (window.innerHeight > a4_4height) {
    a4_4.style.opacity = "1";
    a4_4.style.transition = "1s";
  }
};
window.addEventListener("scroll", Func4_4);

// section5 스크롤시 애니메이션
let a5_1 = document.querySelector(".article5-1");
let a5_2 = document.querySelector(".article5-2");
let a5_3 = document.querySelector(".article5-3");
let trash = document.querySelector("#trash");

let a5_1margin = 200;
let a5_2margin = 100;
let a5_3margin = 150;
let a5_1height = 0;
let a5_2height = 0;
let a5_3height = 0;

const Func5_1 = function () {
  a5_1height = a5_1.getBoundingClientRect().top + a5_1margin;
  if (window.innerHeight > a5_1height) {
    a5_1.style.opacity = "1";
    a5_1.style.transition = "1.2s";
    a5_1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func5_1);

const Func5_2 = function () {
  a5_2height = a5_2.getBoundingClientRect().top + a5_2margin;
  if (window.innerHeight > a5_2height) {
    a5_2.style.opacity = "1";
    a5_2.style.transition = "1.2s";
    a5_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func5_2);

const Func5_3 = function () {
  a5_3height = a5_3.getBoundingClientRect().top + a5_3margin;
  if (window.innerHeight > a5_3height) {
    a5_3.style.opacity = "1";
    a5_3.style.transition = "1s";
  }
};
window.addEventListener("scroll", Func5_3);

// section6 스크롤시 애니메이션
let a6_1 = document.querySelector(".article6-1");
let a6_2 = document.querySelector(".article6-2");
let a6_1margin = 200;
let a6_2margin = 100;
let a6_1height = 0;
let a6_2height = 0;

const Func6_1 = function () {
  a6_1height = a6_1.getBoundingClientRect().top + a6_1margin;
  if (window.innerHeight > a6_1height) {
    a6_1.style.opacity = "1";
    a6_1.style.transition = "1.2s";
    a6_1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func6_1);

const Func6_2 = function () {
  a6_2height = a6_2.getBoundingClientRect().top + a6_2margin;
  if (window.innerHeight > a6_2height) {
    a6_2.style.opacity = "1";
    a6_2.style.transition = "1.2s";
    a6_2.style.margin = "0";
  }
};
window.addEventListener("scroll", Func6_2);

// section7 스크롤시 box 올라오는 애니메이션
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let b1_margin = 200;
let b1_height = 0;
const Func1 = function () {
  b1_height = box1.getBoundingClientRect().top + b1_margin;
  if (window.innerHeight > b1_height) {
    box1.style.opacity = "1";
    box1.style.transition = "1.2s";
    box1.style.margin = "0";
  }
};
window.addEventListener("scroll", Func1);

let b2_margin = 300;
let b2_height = 0;
const Func2 = function () {
  b2_height = box2.getBoundingClientRect().top + b2_margin;
  if (window.innerHeight > b2_height) {
    box2.style.opacity = "1";
    box2.style.transition = "1.2s";
    box2.style.margin = "0";
  }
};

window.addEventListener("scroll", Func2);
let b3_margin = 50;
let b3_height = 0;
const Func3 = function () {
  b3_height = box3.getBoundingClientRect().top + b3_margin;
  if (window.innerHeight > b3_height) {
    box3.style.opacity = "1";
    box3.style.transition = "1.2s";
    box3.style.margin = "0";
  }
};
window.addEventListener("scroll", Func3);

// 사진 hover 애니메이션
let img4_3 = document.querySelector(".article4-3 > img");
let img4_4 = document.querySelector(".article4-4 > img");
let img5_3 = document.querySelector(".article5-3 > img");
const img = [img4_3, img4_4, img5_3];

for (let index = 0; index < 3; index++) {
  if (!img[index].classList.contains("scale_up")) {
    img[index].addEventListener("mouseover", function () {
      this.classList.add("scale_up");
      this.classList.remove("scale_down");
    });
  }
  if (!img[index].classList.contains("scale_down")) {
    img[index].addEventListener("mouseleave", function () {
      this.classList.remove("scale_up");
      this.classList.add("scale_down");
    });
  }
}

//color hover 애니메이션
let a7_1 = document.querySelector(".article7-1");
let a7_2 = document.querySelector(".article7-2");
let a7_3 = document.querySelector(".article7-3");
const a7 = [a7_1, a7_2, a7_3];

let i1 = document.querySelector(".box1 .flex");
let i2 = document.querySelector(".box2 .flex");
let i3 = document.querySelector(".box3 .flex");
const i = [i1, i2, i3];
const color = ["color_blue", "color_orange", "color_green"];

for (let index = 0; index < 3; index++) {
  if (!i[index].classList.contains(color[index])) {
    a7[index].addEventListener("mouseover", function () {
      i[index].classList.add(color[index]);
      i[index].classList.remove("color_off");
    });
  }
  if (!i[index].classList.contains("color_off")) {
    a7[index].addEventListener("mouseleave", function () {
      i[index].classList.remove(color[index]);
      i[index].classList.add("color_off");
    });
  }
}

// gray_header 이벤트
const body = document.querySelector("body");
const section1 = document.querySelector(".section1");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const section5 = document.querySelector(".section5");
const section6 = document.querySelector(".section6");
const section7 = document.querySelector(".section7");

const gray_header = document.querySelector(".gray_header");
const backdrop = document.querySelector(".gray_header .backdrop");
const menu1 = document.querySelector(".gray_header .menu1");
const menu2 = document.querySelector(".gray_header .menu2");
const menu3 = document.querySelector(".gray_header .menu3");

const scrollHeight = body.scrollHeight;
let height1 = section1.offsetHeight;
let height3 = section3.offsetHeight;
let height4 = section4.offsetHeight;
let height5 = section5.offsetHeight;
let height6 = section6.offsetHeight;
let height7 = section7.offsetHeight;
const h1_3 = height1 + height3 + 100;
const h1_4 = height1 + height3 + height4 + 200;
const h1_5 = height1 + height3 + height4 + height5 + 350;
const h1_7 = height1 + height3 + height4 + height5 + height6 + height7;

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY < h1_3) {
    backdrop.style.backdropFilter = "blur(0px)";
    gray_header.style.opacity = "0";
    gray_header.style.transition = "0.5s";
  } else if (scrollY > h1_3 && scrollY <= h1_4) {
    backdrop.style.backdropFilter = "blur(10px)";
    gray_header.style.opacity = "1";
    backdrop.style.backgroundColor = "rgba(220, 220, 220, 0.148)";
    gray_header.style.transition = "0.5s";
    menu1.style.transition = "0.3s";
    menu1.classList.add("menu_on");
    menu2.classList.remove("menu_on");
    menu3.classList.remove("menu_on");
  } else if (scrollY > h1_4 && scrollY <= h1_5) {
    backdrop.style.backdropFilter = "blur(10px)";
    gray_header.style.opacity = "1";
    backdrop.style.backgroundColor = "rgba(220, 220, 220, 0.148)";
    gray_header.style.transition = "0.5s";
    menu2.style.transition = "0.3s";
    menu1.classList.remove("menu_on");
    menu2.classList.add("menu_on");
    menu3.classList.remove("menu_on");
  } else if (scrollY > h1_5 && scrollY <= h1_7) {
    backdrop.style.backdropFilter = "blur(10px)";
    gray_header.style.opacity = "1";
    backdrop.style.backgroundColor = "rgba(220, 220, 220, 0.148)";
    gray_header.style.transition = "0.5s";
    menu3.style.transition = "0.3s";
    menu1.classList.remove("menu_on");
    menu2.classList.remove("menu_on");
    menu3.classList.add("menu_on");
  } else if (scrollY > h1_7) {
    gray_header.style.opacity = "0";
    gray_header.style.transition = "0.5s";
  }
});
