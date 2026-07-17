const legalNotice = document.querySelector(".legal-notice a");
const legalNoticeSection = document.querySelector(".legal-notice-section");
// const contactSection = document.querySelector(".contact");
const animateOnScrollSections = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("showWithAnimation");
      else entry.target.classList.remove("showWithAnimation");
    });
  },
  {
    threshold: 0.35,
    rootMargin: "50px",
  },
);

animateOnScrollSections.forEach((section) => observer.observe(section));

function openLegalNotice(e) {
  e.preventDefault();
  contactSection.classList.add("hide");
  legalNoticeSection.classList.remove("hide");
}

function navigateToServer(link) {
  window.open(link, "_blank");
}

function navigateToGithub(link) {
  window.open(link, "_blank");
}
