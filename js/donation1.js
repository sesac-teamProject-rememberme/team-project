// main 스크롤 이벤트
let main = document.querySelector(".main");
let container0 = document.querySelector(".container0");
let container1 = document.querySelector(".container1");
let inner_wrap = document.querySelector(".inner_wrap");
// img가 스크롤했을 때 나타나는 배경이미지 (연두)
let img = document.querySelector(".bg_img");
let video_wrap = document.querySelector(".video_wrap");
let video = document.querySelector("video");
let text_wrap = document.querySelector(".text_wrap");
let text = document.querySelector(".text");
// offsetHeight는 해당 영역의 높이
let c0 = container0.offsetHeight - 200;
// 300px 뺀거는 스크롤을 container0만큼 다 내리지 않아도 애니메이션 나오게 하려고 한거라 꼭 300이 아니어도 됨(조정 가능)
let c1_1 = container1.offsetHeight - 400;
// 여기서 600뺀거도 마찬가지
let c1_2 = container1.offsetHeight - 550;
let h0 = c0;
// h0은 container0의 높이
let h0_1 = c0 + c1_1;
//h0_1은 container0과 1의 높이의 합
let h0_2 = c0 + c1_1 + c1_2;
// 스크롤 내릴때 y좌표의 값에 따라 애니메이션 부여
window.addEventListener("scroll", () => {
  console.log("scroll y" + scrollY);
  console.log("h0", h0);
  console.log("h0_1", h0_1);
  if (scrollY <= h0) {
    // 처음에는 동영상 크기 가로로 꽉 차게, 나중에 나타나는 이미지랑 글씨는 opacity 0으로 안보이게
    video.style.transform = "scale(1)";
    video.style.transition = "0.5s";
    img.style.transform = "scale(1)";
    img.style.transition = "0.5s";
    img.style.opacity = "0";
    text.style.opacity = "0";
  } else if (scrollY > h0 && scrollY <= h0_1) {
    // container0에서 300px 뺀 값이 되었을 때 동영상의 크기가 줄어듦
    video.style.transform = "scale(0.85)";
    video.style.transition = "0.5s";
    img.style.transform = "scale(0.85)";
    img.style.transition = "0.5s";
    img.style.opacity = "0";
    text.style.opacity = "0";
  } else if (scrollY >= h0_2) {
    //동영상이 줄어들고 조금 있다가 글씨랑 배경이미지 보이게 하려고 약간 간격을 둔 것
    img.style.opacity = "1";
    text.style.opacity = "1";
    text.style.transition = "0.5s";
  }
});
function image_onclick() {
  var arrImage = new Array(
    "그린피스.png",
    "WWF.jpg",
    "녹색보호.jpg",
    "아름다운 제단.jpg",
    "위이어.jpg",
    "자연드림씨앗재단.jpg"
  );
  var imgSource = document.targetimg;
  var intRandom = Math.round(Math.random() * 6);

  while (imgSource.src.indexOf(arrImage[intRandom]) != -1) {
    intRandom = Math.round(Math.random() * 6);
  }
  imgSource.src = arrImage[intRandom];
}
