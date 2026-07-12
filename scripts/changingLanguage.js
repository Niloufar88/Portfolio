const translations = {
  de: {
    LogoDevRole: "entwickler",
    devRole: "Frontend Entwicklerin",
    menuItem1: "wieso ich",
    menuItem2: "Fähigkeiten",
    menuItem3: "Projekte",
    menuItem4: "kontaktieren",
    firstSectionTitle: "wieso ich",
    aboutMeText:
      "Alles beginnt mit einer Idee. Was mich am Programmieren am meisten fasziniert, ist die Fähigkeit, diese Idee in etwas Reales zu verwandeln – etwas, das Menschen sehen, nutzen und erleben können. Für mich bedeutet Codieren, Rätsel zu lösen, Herausforderungen anzunehmen und einen Weg nach vorne zu finden, selbst wenn die Lösung nicht offensichtlich ist. Jeder Bug hat uns etwas beizubringen. Jede Sackgasse eröffnet eine neue Perspektive. Jedes Problem birgt das Potenzial für seine eigene Lösung – man muss nur weiter danach suchen. Am Ende wird großartige Software nicht einfach nur gebaut. Sie wird handgefertigt – Zeile für Zeile.",
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
      "Everything begins with an idea. What fascinates me most about programming is turning that idea into something real—something people can see, use, and experience. To me, coding is about solving puzzles, embracing challenges, and finding a way forward even when the solution isn't obvious. Every bug has something to teach. Every dead end reveals a new perspective. Every problem holds the potential for its own solution—you just have to keep looking. In the end, great software isn't just built. It's crafted—one line of code at a time.",
  },
};

const languageSwitcher = document.getElementById("lang-switcher");
const rootHTML = document.getElementById("root-html");

function changeLanguage(lang) {
  rootHTML.getAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key])
      element.textContent = translations[lang][key];
  });

  localStorage.setItem("prefferdLanguage", lang);
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
