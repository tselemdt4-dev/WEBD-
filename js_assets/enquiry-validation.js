let productName = "";

// URLSearchParams decodes percent-encoded characters such as %20 automatically.
window.addEventListener("load", () => {
  const searchParams = new URLSearchParams(window.location.search);
  productName = searchParams.get("product")?.trim() || "";
  const messageField = document.querySelector("#message");

  if (productName && messageField) {
    messageField.value =
      `Hi Build X team, I am interested in the ${productName}. Could you please provide more information?`;
  }
});

const enquiryForm = document.querySelector("#enquiry-form");
const quoteResult = document.querySelector("#quote-result");

if (enquiryForm && quoteResult) {
  enquiryForm.noValidate = true;

  const fields = {
    name: enquiryForm.elements.fullName,
    email: enquiryForm.elements.email,
    useCase: enquiryForm.elements.useCase,
    budget: enquiryForm.elements.budget,
  };

  // Return a field-specific message when a required value is missing/invalid.
  const getFieldError = (field) => {
    const value = field.value.trim();

    if (!value) {
      return "Please complete this field.";
    }

    if (field === fields.name && value.length < 2) {
      return "Please enter at least 2 characters for your name.";
    }

    if (field === fields.email && field.validity.typeMismatch) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  // Add or clear an accessible inline error beneath the field.
  const validateField = (field) => {
    const errorId = `${field.id}-error`;
    let error = document.getElementById(errorId);
    const message = getFieldError(field);

    if (message) {
      if (!error) {
        error = document.createElement("p");
        error.id = errorId;
        error.className = "error-msg";
        field.insertAdjacentElement("afterend", error);
      }

      error.textContent = message;
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", errorId);
    } else {
      error?.remove();
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
    }

    return message === "";
  };

  const requiredFields = Object.values(fields);

  // Refresh a field's message as it is edited.
  requiredFields.forEach((field) => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => validateField(field));
  });

  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const invalidFields = requiredFields.filter((field) => !validateField(field));

    if (invalidFields.length > 0) {
      invalidFields[0].focus();
      return;
    }

    const firstName = fields.name.value.trim().split(/\s+/)[0];
    const useCase = fields.useCase.value;
    const budget = fields.budget.value;
    let buildEstimate;

    if (budget === "Under R15,000") {
      buildEstimate = "Estimated Build Time: 3-5 Days";
    } else if (budget === "R15,000 - R25,000") {
      buildEstimate = "Estimated Build Time: 5-7 Days";
    } else {
      // Both higher budget options use the same estimate.
      buildEstimate = "Estimated Build Time: 7-10 Days";
    }

    enquiryForm.hidden = true;
    const productContext = productName
      ? ` We have received your enquiry regarding the ${productName}.`
      : "";

    quoteResult.textContent =
      `Thank you ${firstName}!${productContext} Based on your ${useCase} needs and budget of ${budget}, we have availability in our workshop. ${buildEstimate}. A consultant will email you a detailed quote within 24 hours.`;
    quoteResult.style.display = "block";
    quoteResult.focus();
  });
}
