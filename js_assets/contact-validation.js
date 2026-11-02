const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  // Use inline messages instead of the browser's default validation popups.
  contactForm.noValidate = true;

  const requiredFields = [...contactForm.querySelectorAll("[required]")];
  const statusBanner = document.createElement("div");
  statusBanner.className = "form-status";
  statusBanner.setAttribute("role", "status");
  statusBanner.setAttribute("aria-live", "polite");
  statusBanner.tabIndex = -1;
  contactForm.prepend(statusBanner);

  // Return a helpful validation message for a required field or invalid email.
  const getFieldError = (field) => {
    if (!field.value.trim()) {
      return "Please complete this field.";
    }

    if (field.type === "email" && field.validity.typeMismatch) {
      return "Enter a valid email address, such as name@example.com.";
    }

    return "";
  };

  // Update the inline error and accessibility attributes for one field.
  const updateField = (field) => {
    const errorId = `${field.id}-error`;
    let errorMessage = document.getElementById(errorId);
    const message = getFieldError(field);

    if (message) {
      if (!errorMessage) {
        errorMessage = document.createElement("p");
        errorMessage.id = errorId;
        errorMessage.className = "error-msg";
        field.insertAdjacentElement("afterend", errorMessage);
      }

      errorMessage.textContent = message;
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", errorId);
    } else {
      errorMessage?.remove();
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
    }

    return message === "";
  };

  // Validate fields as the user edits them and clear stale success feedback.
  requiredFields.forEach((field) => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";

    field.addEventListener(eventName, () => {
      statusBanner.textContent = "";
      updateField(field);
    });
  });

  contactForm.addEventListener("submit", (event) => {
    // This is a front-end demonstration; no form data is sent to a server.
    event.preventDefault();
    statusBanner.textContent = "";

    const invalidFields = requiredFields.filter((field) => !updateField(field));

    if (invalidFields.length > 0) {
      invalidFields[0].focus();
      return;
    }

    statusBanner.textContent = "Thanks! Your message has been received.";
    statusBanner.focus();
  });
}
