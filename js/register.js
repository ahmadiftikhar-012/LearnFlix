const profileForm = document.querySelector("#settings");
const profileFeedback = document.querySelector("#register-feedback");

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const learnerName = String(
    new FormData(profileForm).get("full-name") || "",
  ).trim();
  profileFeedback.textContent = learnerName
    ? `Profile preview ready for ${learnerName}. This demo does not save or send your information.`
    : "Profile preview ready. This demo does not save or send your information.";
});
