// let navbar_div = document.getElementById("navbar");
// let isBgLight = false;

// // to makesure it has the bgLignt when reload
// const getBG = () => {
//   if (window.pageYOffset > 20) {
//     navbar_div.classList.add("bg-light");
//     isBgLight = true;
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };
// getBG();

// window.addEventListener("scroll", (e) => {
//   console.log("log");
//   let scrollHeight = window.pageYOffset;
//   let b = document.body.scrollTop;
//   let c = window.clientHeight;
//   //   console.log(a, b, c);

//   if (scrollHeight > 20) {
//     isBgLight = navbar_div.classList.contains("bg-light");

//     if (!isBgLight) {
//       navbar_div.classList.add("bg-light");
//       navbar_div.classList.add("navbar-light");
//       navbar_div.classList.remove("navbar-dark");
//     }
//   } else {
//     isBgLight = navbar_div.classList.contains("bg-light");
//     if (isBgLight) {
//       navbar_div.classList.remove("bg-light");
//       navbar_div.classList.remove("navbar-light");
//       navbar_div.classList.add("navbar-dark");
//     }
//   }
// });

// Hero Page
const tlLeft = gsap.timeline({ defaults: { duration: 1 } });

tlLeft.fromTo(".hero-left > h1", { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
tlLeft.fromTo(
  ".hero-left > p",
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0 },
  "<"
);
tlLeft.fromTo(".hero-btn", { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "<");
// tlLeft.fromTo(
//   ".hero-left-circle-gsap",
//   { opacity: 0, x: 100 },
//   { opacity: 1, x: 0 },
//   "<"
// );
tlLeft.fromTo(".hero-left-circle-gsap", { opacity: 0 }, { opacity: 1 }, "<");

// TlRight
const heroTlRight = gsap.timeline({ defaults: { duration: 1 } });
gsap.fromTo(".hero-right", { opacity: 0, x: 100 }, { opacity: 1, x: 0 });

// aboutTlLeft
const aboutTlLeft = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".about-container",
    start: "-70%",
    end: "80%",
    scrub: true,
  },
});

aboutTlLeft.fromTo(
  ".about-left-circle-3",
  { rotation: 90, opacity: 1 },
  { rotation: -70, opacity: 1 }
);
aboutTlLeft.fromTo(
  ".about-left-circle-4",
  { rotation: 90, opacity: 1 },
  { rotation: -70, opacity: 1 },
  "<"
);

//dervice
var tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-container",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// support

var tlServicePerson = gsap.timeline({
  defaults: {
    opacity: 0.1,
  },
  defaults: {
    opacity: 1,
  },
  scrollTrigger: {
    trigger: ".support-container",
    start: "-80%",
    end: "20%",
    scrub: true,
  },
});

tlServicePerson.fromTo(
  ".person-image-1",
  { x: 100, y: 100 },
  { x: 0, y: 0 },
  "<"
);
tlServicePerson.fromTo(
  ".person-image-2",
  { x: 100, y: 0 },
  { x: 0, y: 0 },
  "<"
);
tlServicePerson.fromTo(
  ".person-image-3",
  { x: 100, y: -100 },
  { x: 0, y: 0 },
  "<"
);
tlServicePerson.fromTo(
  ".person-image-4",
  { x: -100, y: -100 },
  { x: 0, y: 0 },
  "<"
);
tlServicePerson.fromTo(
  ".person-image-5",
  { x: -100, y: 0 },
  { x: 0, y: 0 },
  "<"
);
tlServicePerson.fromTo(
  ".person-image-6",
  { x: -100, y: 100 },
  { x: 0, y: 0 },
  "<"
);
