const filterButtons = [...document.querySelectorAll(".filter-button[data-filter]")];
const productSections = [...document.querySelectorAll(".products-section[data-category]")];

// Show every section for "all", or only sections matching the selected category.
const filterProducts = (category) => {
  productSections.forEach((section) => {
    section.hidden = category !== "all" && section.dataset.category !== category;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

// Delegate clicks so all category controls share the same filtering behavior.
document.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-button[data-filter]");

  if (button && filterButtons.includes(button)) {
    filterProducts(button.dataset.filter);
  }
});
