const translations = {
  de: {
    LogoDevRole: "entwicklerin",
    devRole: "Frontend Entwicklerin",
    menuItem1: "wieso ich",
    menuItem2: "Fähigkeiten",
    menuItem3: "Projekte",
    menuItem4: "kontaktieren",
    firstSectionTitle: "wieso ich",
    aboutMeText:
      "Alles beginnt mit einer Idee. <br /> Was mich am Programmieren am meisten fasziniert, ist die Fähigkeit, diese Idee in etwas Reales zu verwandeln – etwas, das Menschen sehen, nutzen und erleben können.<br /> Für mich bedeutet Codieren, Rätsel zu lösen, Herausforderungen anzunehmen und einen Weg nach vorne zu finden, selbst wenn die Lösung nicht offensichtlich ist. <br /> Jeder Bug hat uns etwas beizubringen. Jede Sackgasse eröffnet eine neue Perspektive. Jedes Problem birgt das Potenzial für seine eigene Lösung – man muss nur weiter danach suchen. <br />Am Ende wird großartige Software nicht einfach nur gebaut. Sie wird handgefertigt – Zeile für Zeile.",
    headerDevRole: "entwicklerin",
  },
  en: {
    LogoDevRole: "developer",
    devRole: "Frontend developer",
    menuItem1: "Why Me",
    menuItem2: "Skills",
    menuItem3: "Projects",
    menuItem4: "Contact",
    firstSectionTitle: "why Me",
    aboutMeText:
      "Everything begins with an idea.<br />  What fascinates me most about programming is turning that idea into something real—something people can see, use, and experience. <br />To me, coding is about solving puzzles, embracing challenges, and finding a way forward even when the solution isn't obvious. <br />Every bug has something to teach. Every dead end reveals a new perspective. Every problem holds the potential for its own solution—you just have to keep looking.<br /> In the end, great software isn't just built. It's crafted—one line of code at a time.",
    headerDevRole: "developer",
  },
};

const languageSwitcher = document.getElementById("lang-switcher");
const rootHTML = document.getElementById("root-html");

function changeLanguage(lang) {
  rootHTML.getAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key])
      element.innerHTML = translations[lang][key];
  });
  updateLangIcon(lang);
  localStorage.setItem("prefferdLanguage", lang);
}

function updateLangIcon(lang) {
  document.querySelectorAll("#lang-switcher a").forEach((a) => {
    if (a.getAttribute("data-id") === lang) a.classList.add("active");
    else a.classList.remove("active");
  });
}

languageSwitcher.addEventListener("click", (e) => {
  e.preventDefault();
  const language = e.target.dataset.id;

  if (language === "de") changeLanguage("de");
  else if (language === "en") changeLanguage("en");
});

document.addEventListener("DOMContentLoaded", () => {
  const standardLanguage = localStorage.getItem("prefferdLanguage") || "de";
  changeLanguage(standardLanguage);
});
