const galleryImages = document.querySelectorAll(
  ".card-image img, .category-card img"
);

galleryImages.forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `View image: ${image.alt}`);
  image.setAttribute("aria-haspopup", "dialog");

  const openLightbox = (event) => {
    event.preventDefault();

    const overlay = document.createElement("div");
    overlay.className = "product-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image preview");

    const fullSizeImage = document.createElement("img");
    fullSizeImage.className = "lightbox-image";
    fullSizeImage.src = image.currentSrc || image.src;
    fullSizeImage.alt = image.alt;

    const closeButton = document.createElement("button");
    closeButton.className = "lightbox-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close image preview");
    closeButton.textContent = "×";

    const closeLightbox = () => {
      overlay.remove();
      image.focus();
    };

    closeButton.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", (overlayClick) => {
      if (overlayClick.target === overlay) {
        closeLightbox();
      }
    });

    // Let keyboard users close the preview without reaching the close button.
    overlay.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.key === "Escape") {
        closeLightbox();
      }
    });

    overlay.append(fullSizeImage, closeButton);
    document.body.append(overlay);
    closeButton.focus();
  };

  image.addEventListener("click", openLightbox);
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      openLightbox(event);
    }
  });
});
