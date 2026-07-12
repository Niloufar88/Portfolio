const languageEl = document.querySelectorAll(".header-language-text");
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
    });
  });
}

updateActiveMenuBtn(event);

//scroll down function to
