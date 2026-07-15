const translations = {
  de: {
    LogoDevRole: "entwicklerin",
    devRole: "Frontend Entwicklerin",
    menuItem1: "wieso ich",
    menuItem2: "Fähigkeiten",
    menuItem3: "Projekte",
    menuItem4: "kontakt",
    firstSectionTitle: "wieso ich",
    secondSectionTitle: "meine Fähigkeiten",
    thirdSectionTitle: "meine Projekte",
    forthSectionTitle:
      "Auf der Suche nach einem Teamplayer? Das sagen meine Kolleginnen und Kollegen über mich",
    fifthSectionTitle: "mich kontaktieren",
    aboutMeText:
      "Alles beginnt mit einer Idee. <br /> Was mich am Programmieren am meisten fasziniert, ist die Fähigkeit, diese Idee in etwas Reales zu verwandeln – etwas, das Menschen sehen, nutzen und erleben können.<br /> Für mich bedeutet Codieren, Rätsel zu lösen, Herausforderungen anzunehmen und einen Weg nach vorne zu finden, selbst wenn die Lösung nicht offensichtlich ist. <br /> Jeder Bug hat uns etwas beizubringen. Jede Sackgasse eröffnet eine neue Perspektive. Jedes Problem birgt das Potenzial für seine eigene Lösung – man muss nur weiter danach suchen. <br />Am Ende wird großartige Software nicht einfach nur gebaut. Sie wird handgefertigt – Zeile für Zeile.",
    aboutMeBtn: "lass uns reden",
    refProject: "Projekt",
    refCommenetLink: "In Profil verlinkt",
    headerDevRole: "entwicklerin",
    refComment1:
      "‘’Niloufar entwickelte, strukturierte und bereitete Inhalte in enger Zusammenarbeit mit den Teammitgliedern auf. Sie ist eine zuverlässige und freundliche Persönlichkeit, auf die man sich jederzeit verlassen kann.’’",
    refComment2:
      "‘’Niloufar ist eine zuverlässige und freundliche Persönlichkeit. Sie arbeitet strukturiert und schreibt klaren, gut verständlichen Code. Ich kann sie als Kollegin uneingeschränkt empfehlen.’’",
    refComment3:
      "‘’Sie ist eine vertrauenswürdige Teamplayerin und bewahrt auch unter Termindruck einen kühlen Kopf. Sie arbeitet strukturiert und schreibt klaren, gut verständlichen Code.‘’",
    contactMeText:
      "Großartige Benutzeroberflächen sind mehr als nur funktional – sie hinterlassen einen Eindruck. Als Frontend-Entwicklerin mit einem Hintergrund in Kunst verbinde ich gestalterisches Denken mit sauberem, wartbarem Code, um digitale Erlebnisse zu schaffen, die Menschen gerne nutzen. Lassen Sie uns gemeinsam etwas entwickeln, das heraussticht.",
    formName: "Ihr Name",
    formEmail: "Ihre E-Mail",
    formMessage: "Ihre Nachricht",
    formBtn: "Senden",
    duration1: "Zeitplan: 5 Wochen",
    aboutProjectTitle: "übers Projekt",
    aboutProjectExplanation1:
      "Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe dabei, Münzen und Salsaflaschen zu sammeln, um gegen die Hühner und den Endboss zu kämpfen.",
    organaizeTitle: "So habe ich meinen Arbeitsprozess organisiert",
    organiseText1:
      "Die Aufteilung des Codes in separate Klassen sorgt für eine saubere und wartbare Codebasis. Jede Klasse ist für ein bestimmtes Spielobjekt verantwortlich und enthält ausschließlich die Spiellogik, für die sie zuständig ist.",
    soloProjectLearn: "Meine Erkenntnisse",
    learnExplanation:
      "Als jemand, der ständig neue Technologien kennenlernen möchte, hat mir die Arbeit an diesem Projekt viel Freude bereitet. Sie ermöglichte es mir, mich intensiv mit objektorientierter Programmierung (OOP) in JavaScript sowie mit dem HTML-Canvas auseinanderzusetzen.",
    tech: "Technologien",
    legalNoticeTitle: "Impressum",
  },
  en: {
    LogoDevRole: "developer",
    devRole: "Frontend developer",
    menuItem1: "Why Me",
    menuItem2: "Skills",
    menuItem3: "Projects",
    menuItem4: "Contact",
    firstSectionTitle: "why Me",
    secondSectionTitle: "my skills",
    thirdSectionTitle: "My Projects",
    forthSectionTitle:
      "Need a teamplayer? Here’s what my colleagues say about me",
    fifthSectionTitle: "Contact me",
    aboutMeText:
      "Everything begins with an idea.<br />  What fascinates me most about programming is turning that idea into something real—something people can see, use, and experience. <br />To me, coding is about solving puzzles, embracing challenges, and finding a way forward even when the solution isn't obvious. <br />Every bug has something to teach. Every dead end reveals a new perspective. Every problem holds the potential for its own solution—you just have to keep looking.<br /> In the end, great software isn't just built. It's crafted—one line of code at a time.",
    refProject: "Project",
    refCommenetLink: "Linked In Profile",
    aboutMeBtn: "Let’s talk",
    headerDevRole: "developer",
    refComment1:
      "‘’Niloufar had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’",
    refComment2:
      "‘’Niloufar is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.’’",
    refComment3:
      "‘’ She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’",
    contactMeText:
      "Great interfaces are more than functional—they're felt. As a Frontend Developer with a background in art, I combine visual thinking with clean, maintainable code to create experiences people enjoy using. Let's build something that stands out.",
    formName: "Your name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formBtn: "Send",
    duration1: "Duration: 5 weeks",
    aboutProjectTitle: "About the project",
    aboutProjectExplanation1:
      "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe gather coins and Salsa bottles to fight against the chickens and Endboss.",
    organaizeTitle: "How I have organised my work process",
    organiseText1:
      "Deviding the Scripts into separate classes keeps the code clean and maintainable, each class is responsible for a specific game object and includes only the game logic it is respnsible for.",
    soloProjectLearn: "What I have learned",
    learnExplanation:
      "As someone who is always trying to learn new technologies, i enjoyed working on this project because it allowed me to delve deep into a OOP in JavaScript and Canvas in HTML.",
    tech: "Technologies",
    legalNoticeTitle: "Legal Notice",
  },
};

const languageSwitcher = document.getElementById("lang-switcher");
const rootHTML = document.getElementById("root-html");

function changeLanguage(lang) {
  rootHTML.getAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    // if (translations[lang] && translations[lang][key])
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
