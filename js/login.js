
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const emailField = document.getElementById("email-field");
  const passwordField = document.getElementById("password-field");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginError = document.getElementById("login-error");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailOk = MiCarro.setFieldValidity(emailField, MiCarro.isEmail(email.value));
    const passwordOk = MiCarro.setFieldValidity(passwordField, password.value.length > 0);
    loginError.hidden = emailOk && passwordOk;

    if (!emailOk) {
      email.focus();
    } else if (!passwordOk) {
      password.focus();
    } else {
      window.location.href = "panel.html";
    }
  });


  [[email, emailField], [password, passwordField]].forEach(([input, field]) => {
    input.addEventListener("input", () => {
      MiCarro.setFieldValidity(field, true);
      if (!emailField.classList.contains("is-invalid") && !passwordField.classList.contains("is-invalid")) {
        loginError.hidden = true;
      }
    });
  });

  // ---------- Recuperar contraseña ----------
  const recoverModal = document.getElementById("recover-modal");
  const recoverOpener = document.querySelector('[data-open-modal="recover-modal"]');
  const recoverForm = document.getElementById("recover-form");
  const recoverField = document.getElementById("recover-email-field");
  const recoverEmail = document.getElementById("recover-email");

  recoverOpener.addEventListener("click", () => {
    MiCarro.setFieldValidity(recoverField, true);
    if (!recoverEmail.value) recoverEmail.value = email.value;
  });

  recoverEmail.addEventListener("input", () => MiCarro.setFieldValidity(recoverField, true));

  recoverForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!MiCarro.setFieldValidity(recoverField, MiCarro.isEmail(recoverEmail.value))) {
      recoverEmail.focus();
      return;
    }
    MiCarro.closeModal(recoverModal);
    recoverForm.reset();
    MiCarro.openModal("recover-sent-modal");
  });
});
