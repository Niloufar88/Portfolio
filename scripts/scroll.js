const heroSection = document.getElementById("hero-section");
const header = document.querySelector(".header");

// fixing header postion when hero section is scrolled down completely
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const heroSectionHeight = heroSection.getBoundingClientRect().height;

  if (scrollHeight > heroSectionHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

//giving active class to menu btns

function updateActiveMenuBtn() {
  const menuLinks = document.querySelectorAll(".header-menu nav ul li");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      menuLinks.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });
      link.classList.add("active");
      scrollWithBounce(event);
    });
  });
}

updateActiveMenuBtn();

//scroll down function with bounce and rebounce effect

function scrollWithBounce(event) {
  const id = event.target.id;
  if (!id) return;

  const targetElement = document.querySelector(`[data-id = "${id}"]`);
  if (!targetElement) return;

  const currentY = window.scrollY;
  const targetY = targetElement.getBoundingClientRect().top + currentY;
  const headerHeight = header.getBoundingClientRect().height;
  const endPoint = targetY - headerHeight;
  const isScrollingDown = currentY < endPoint;
  const bounceTarget = isScrollingDown ? endPoint + 80 : endPoint - 80;
  runBouncePhase(currentY, bounceTarget, endPoint, isScrollingDown);
}

function runBouncePhase(currentY, bounceTarget, endPoint, isScrollingDown) {
  let loopY = currentY;
  function animateBounce() {
    const distanceLeft = Math.abs(bounceTarget - loopY);
    let bounceSpeed = distanceLeft * 0.1;
    if (bounceSpeed < 2) bounceSpeed = 2;

    loopY = isScrollingDown ? loopY + bounceSpeed : loopY - bounceSpeed;
    window.scrollTo(0, loopY);

    const keepGoing = isScrollingDown
      ? loopY < bounceTarget
      : loopY > bounceTarget;
    if (keepGoing) requestAnimationFrame(animateBounce);
    else {
      window.scrollTo(0, bounceTarget);
      runRebouncePhase(bounceTarget, endPoint, isScrollingDown);
    }
  }
  requestAnimationFrame(animateBounce);
}

function runRebouncePhase(bounceTarget, endPoint, isScrollingDown) {
  let loopY = bounceTarget;
  function animateRebounce() {
    const distanceLeft = Math.abs(loopY - endPoint);
    let rebounceSpeed = distanceLeft * 0.06;
    if (rebounceSpeed < 2) rebounceSpeed = 2;
    loopY = isScrollingDown ? loopY - rebounceSpeed : loopY + rebounceSpeed;
    window.scrollTo(0, loopY);
    const keepGoing = isScrollingDown ? loopY > endPoint : loopY < endPoint;
    if (keepGoing) requestAnimationFrame(animateRebounce);
    else window.scrollTo(0, endPoint);
  }
  requestAnimationFrame(animateRebounce);
}
