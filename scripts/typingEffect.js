const iconEl = document.querySelector(".about-me-icon");
const firstPartText = document.querySelector(".fp");
const secondPartText = document.querySelector(".sp");
const thirdPartText = document.querySelector(".tp");
const animationContainer = document.querySelector(".about-me-animation");

const textItems = [
  {
    icon: "assets/components/why me/location.svg",
    fpText: "I am",
    spText: " located in Tehran",
    tpText: "... |",
  },
  {
    icon: "assets/components/why me/relocate.svg",
    fpText: "I am",
    spText: " open to relocate",
    tpText: "... |",
  },
  {
    icon: "assets/components/why me/remote.svg",
    fpText: "I am",
    spText: " open to work remote",
    tpText: "... |",
  },
];

let itemIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typeSpeed = 120;
const deleteSpeed = 80;
const holdTime = 1000;
const gapAfterHide = 300;

function letterAppearance() {
  const { current, fullText } = textPartEl();
  animationContainer.classList.remove("hidden");
  iconEl.src = current.icon;
  if (!isDeleting) {
    letterIndex++;
    fullTextRenderin(letterIndex);
    if (letterIndex === fullText.length) {
      isDeleting = true;
      setTimeout(letterAppearance, holdTime);
      return;
    }
    textSetTimeout(typeSpeed);
  } else {
    letterIndex--;
    fullTextRenderin(letterIndex);
    if (letterIndex === 0) {
      isDeleting = false;
      itemIndex = (itemIndex + 1) % textItems.length;
      animationContainer.classList.add("hidden");
      setTimeout(letterAppearance, gapAfterHide);
      return;
    }
    textSetTimeout(deleteSpeed);
  }
}

function textPartEl() {
  const current = textItems[itemIndex];
  const fullText = current.fpText + " " + current.spText + " " + current.tpText;
  return { current, fullText };
}

function fullTextRenderin(letterIndex) {
  const { current, fullText } = textPartEl();
  const typedPart = fullText.slice(0, letterIndex);
  firstPartText.textContent = typedPart.slice(0, current.fpText.length);
  const spStart = current.fpText.length;
  const spEnd = spStart + 1 + current.spText.length;
  secondPartText.textContent = typedPart.slice(spStart, spEnd);
  const tpStart = spEnd;
  thirdPartText.textContent = typedPart.slice(tpStart);
}

function textSetTimeout(speed) {
  setTimeout(letterAppearance, speed);
  return;
}

letterAppearance();
