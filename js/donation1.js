const ta = gsap.timeline();
const tb = gsap.timeline();
const tc = gsap.timeline();
const td = gsap.timeline();
const te = gsap.timeline();
const tf = gsap.timeline();

ScrollTrigger.create({
  trigger: ".container1", // 스크롤 기준점
  animation: ta, // 타임라인
  start: "top top",
  end: "+=2000",
  scrub: 1,
  delay: 0.5,
  markers: true,
  pin: true,
});

ta.to(".video-wrap", {
  width: "100vw",
  transition: "1",
});

ScrollTrigger.create({
  trigger: ".container2", // 스크롤 기준점
  animation: tb, // 타임라인
  start: "top top",
  end: "+=300",
  scrub: 1,
  delay: 0.5,
  markers: true,
  pin: true,
});

ScrollTrigger.create({
  trigger: ".arrow", // 스크롤 기준점
  animation: tc, // 타임라인
  start: "top top",
  end: "+=300",
  scrub: 1,
  delay: 0.5,
  markers: true,
});

ScrollTrigger.create({
  trigger: ".container3", // 스크롤 기준점
  animation: td, // 타임라인
  start: "top top",
  end: "+=300",
  scrub: 1,
  delay: 0.5,
  markers: true,
});

ScrollTrigger.create({
  trigger: ".arrow", // 스크롤 기준점
  animation: te, // 타임라인
  start: "top top",
  end: "+=300",
  scrub: 1,
  delay: 0.5,
  markers: true,
  pin: true,
});

ScrollTrigger.create({
  trigger: ".contianer5", // 스크롤 기준점
  animation: tf, // 타임라인
  start: "top top",
  end: "+=300",
  scrub: 1,
  delay: 0.5,
  markers: true,
});
