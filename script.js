const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});





function vidanimation() {
  
  var vid = document.querySelector(".video");
  var playButton = document.querySelector(".playbtn");
  vid.addEventListener("mouseenter", function () {
    gsap.to(playButton, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  vid.addEventListener("mouseleave", function () {
    gsap.to(playButton, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  vid.addEventListener("mousemove", function (event) {
    gsap.to(playButton, {
      left:event.x - 30,
      top:event.y - 30,
      duration: 0.3,
      ease: "power2.out",
      opacity: 1,
    });
  });
}
vidanimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();

