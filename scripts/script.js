const languageEl = document.querySelectorAll(".header-language-text");
const heroSection = document.getElementById("hero-section");
const header = document.querySelector(".header");

// const arrowDownBtn = document.querySelector(".arrow-down");
// const targetSection = document.getElementById("why-me");

// arrowDownBtn.addEventListener("click", () => {
//   // 1. Get the current scroll position
//   const currentScroll = window.scrollY;

//   // 2. Get the distance from the top of the screen to the section
//   const sectionTopRelative = targetSection.getBoundingClientRect().top;

//   // 3. Add them together to get the absolute position from the very top of the page
//   const absoluteTargetPosition = currentScroll + sectionTopRelative;

//   // 4. Run your spring animation function
//   springScroll(absoluteTargetPosition);
// });

function eclipseBgActive() {
  languageEl.forEach((langBtn) => {
    langBtn.classList.add("active");
  });
}

// fixing header postion when hero section is scrolled down completely
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  console.log(`scrollHeight:`, window.pageYOffset);
  const heroSectionHeight = heroSection.getBoundingClientRect().height;

  if (scrollHeight > heroSectionHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// function springScroll(endPosition) {
//   const mass = 1;
//   const stiffness = 100;
//   const damping = 15;

//   let speed = 0;

//   function schritt() {
//     const distance = endPosition - window.scrollY;

//     // If we are close enough, snap to target and stop
//     if (Math.abs(distance) < 0.5 && Math.abs(speed) < 0.5) {
//       window.scrollTo(0, endPosition);
//       return;
//     }

//     // 1. Calculate physics forces
//     const kraft = distance * stiffness;
//     const bremsen = speed * damping;

//     // 2. Update speed (multiplied by 0.016 to slow it down per frame)
//     speed = speed + ((kraft - bremsen) / mass) * 0.016;

//     // 3. Update position (multiplied by 0.016 for smooth rendering)
//     const neuePosition = window.scrollY + speed * 0.016;
//     window.scrollTo(0, neuePosition);

//     requestAnimationFrame(schritt);
//   }

//   requestAnimationFrame(schritt);
// }
