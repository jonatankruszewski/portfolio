import { grabElement } from "./handler.js";
//import * as gsap from "./gsap.min.js";

const animate = (nav, body) => {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.from(nav, { y: -100, stagger: 0.6, opacity: 1 }).from(body, {
    opacity: 0,
    duration: 1,
  });
};

export default animate;
