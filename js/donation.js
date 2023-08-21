let tl1 = gsap.to(".container1 .video-wrap", {
  scrollTrigger: {
    trigger: ".container1 .video-wrap",
    // markers: true,
    scrub: 2,
    start: "100 center",
    end: "100 100",
  },
  scale: 1,
});

// function kkoMotion() {
//   let yOffset = $(window).scrollTop();
//   let GNB_H = $("header").innerHeight();
//   let elementPatent = $(".main .container1").offset().top - GNB_H;

//   if ($(window).outerWidth() < 769) {
//     if (yOffset >= elementPatent - 100) {
//       $(".main .container1 .img").fadeIn();
//       $(".main .container1 .text-wrap .text").fadeIn();
//     } else {
//       $(".main .container1 .text-wrap .text").fadeOut();
//       $(".main .container1 .img").fadeOut();
//     }
//   } else {
//     if (yOffset > elementPatent) {
//       $(".main .container1 .img").fadeIn();
//       $(".main .container1 .text-wrap .text").fadeIn();
//     } else {
//       $(".main .container1 .text-wrap .text").fadeOut();
//       $(".main .container1 .img").fadeOut();
//     }
//   }
// }
