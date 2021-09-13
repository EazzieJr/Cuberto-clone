import Cursor from "./cursor.js";
// import { gsap } from "gsap";

const body = document.querySelector("body");

window.onload = () => {
  body.classList.remove("loading");
  gsap.from(body, {
    opacity: 0,
    duration: 2.5,
    ease: "Power3.easeInOut",
  });
  $('html, body').animate({ scrollTop: 0 }, 'normal');
  const cursor = new Cursor(document.querySelector(".cursor"));
};