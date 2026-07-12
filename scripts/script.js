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
  console.log(` id: `, id);
  if (!id) return;

  const targetElement = document.querySelector(`[data-id = "${id}"]`);
  console.log(`targetElement: `, targetElement);

  if (!targetElement) return;

  const currentY = window.scrollY;
  const targetY = targetElement.getBoundingClientRect().top + currentY;
  const headerHeight = header.getBoundingClientRect().height;
  const endPoint = targetY - headerHeight;
  const bounceTarget = endPoint + 80;
  runBouncePhase(currentY, bounceTarget, endPoint);
}

function runBouncePhase(currentY, bounceTarget, endPoint) {
  let loopY = currentY;
  function animateBounce() {
    const distanceLeft = bounceTarget - loopY;
    let bounceSpeed = distanceLeft * 0.1;
    if (bounceSpeed < 2) bounceSpeed = 2;
    loopY += bounceSpeed;
    window.scrollTo(0, loopY);
    if (loopY < bounceTarget) requestAnimationFrame(animateBounce);
    else {
      window.scrollTo(0, bounceTarget);
      runRebouncePhase(bounceTarget, endPoint);
    }
  }
  requestAnimationFrame(animateBounce);
}

function runRebouncePhase(bounceTarget, endPoint) {
  let loopY = bounceTarget;
  function animateRebounce() {
    const distanceLeft = loopY - endPoint;
    let rebounceSpeed = distanceLeft * 0.03;
    if (rebounceSpeed < 1) rebounceSpeed = 1;
    loopY -= rebounceSpeed;
    window.scrollTo(0, loopY);
    if (loopY > endPoint) requestAnimationFrame(animateRebounce);
    else window.scrollTo(0, endPoint);
  }
  requestAnimationFrame(animateRebounce);
}
