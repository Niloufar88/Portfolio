//active project btns

function removeActiveClass() {
  const projectTabs = document.querySelectorAll(".project-name-tab");

  projectTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

const liveTestBtn = document.getElementById("liveTestBtn");
const gitHubBtn = document.getElementById("gitHubBtn");
const legalNotice = document.querySelector(".legal-notice a");
const legalNoticeSection = document.querySelector(".legal-notice-section");
const contactSection = document.querySelector(".contact");
const animateOnScrollSections = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("showWithAnimation");
      else entry.target.classList.remove("showWithAnimation");
    });
  },
  {
    threshold: 0.2,
    rootMargin: "50px",
  },
);

animateOnScrollSections.forEach((section) => observer.observe(section));

function openLegalNotice(e) {
  e.preventDefault();
  contactSection.classList.add("hide");
  legalNoticeSection.classList.remove("hide");
}

function navigateToServer() {
  window.open(
    "https://niloufar-shirvani.developerakademie.net/El-Pollo-Loco-Spiel/index.html",
    "_blank",
  );
}

function navigateToGithub() {
  window.open(
    "https://github.com/Niloufar88/El-Pollo-Loco---Jump-and-Run-Spiel",
    "_blank",
  );
}
