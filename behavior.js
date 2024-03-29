const allCards = document.querySelectorAll(".row");

// Sticky Header



// Revealing Cards
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("cards--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});
allCards.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("cards--hidden");
});
