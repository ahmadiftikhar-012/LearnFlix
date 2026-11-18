const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

const contactFields = [
  {
    input: document.querySelector("#contact-name"),
    error: document.querySelector("#name-error"),
    message: "Enter your name using at least 2 characters.",
  },
  {
    input: document.querySelector("#contact-email"),
    error: document.querySelector("#email-error"),
    message: "Enter a valid email address.",
  },
  {
    input: document.querySelector("#contact-message"),
    error: document.querySelector("#message-error"),
    message: "Write a message using at least 10 characters.",
  },
];

function updateFieldMessage(field) {
  const isValid = field.input.validity.valid;
  field.input.setAttribute("aria-invalid", String(!isValid));
  field.error.textContent = isValid ? "" : field.message;
}

contactFields.forEach((field) => {
  field.input.addEventListener("input", () => {
    formFeedback.textContent = "";
    updateFieldMessage(field);
  });
  field.input.addEventListener("blur", () => updateFieldMessage(field));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactFields.forEach(updateFieldMessage);

  if (!contactForm.checkValidity()) {
    formFeedback.textContent = "Please correct the highlighted fields.";
    contactForm.reportValidity();
    return;
  }

  formFeedback.textContent =
    "Thanks! Your message passed the demo check. It has not been sent to a server.";
  contactForm.reset();
  contactFields.forEach(({ input, error }) => {
    input.removeAttribute("aria-invalid");
    error.textContent = "";
  });
});
