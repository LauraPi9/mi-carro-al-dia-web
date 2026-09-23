
const MiCarro = (() => {
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ---------- Toast ----------
  let toastEl;
  let toastTimer;

  function toast(message) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 3000);
  }

  // ---------- Modales ----------
  function openModal(id) {
    const dialog = document.getElementById(id);
    if (dialog && !dialog.open) dialog.showModal();
    return dialog;
  }

  function closeModal(id) {
    const dialog = typeof id === "string" ? document.getElementById(id) : id;
    if (dialog && dialog.open) dialog.close();
  }

  // ---------- Validación ----------
  /** Marca o desmarca un .field como inválido. Devuelve true si es válido. */
  function setFieldValidity(field, isValid) {
    field.classList.toggle("is-invalid", !isValid);
    const input = field.querySelector("input, select");
    if (input) input.setAttribute("aria-invalid", String(!isValid));
    return isValid;
  }

  function isEmail(value) {
    return EMAIL_PATTERN.test(value.trim());
  }

  // ---------- Delegación de eventos ----------
  function bindGlobalHandlers() {
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open-modal]");
      if (opener) {
        e.preventDefault();
        openModal(opener.dataset.openModal);
        return;
      }

      const closer = e.target.closest("[data-close-modal]");
      if (closer) {
        closeModal(closer.closest("dialog"));
        return;
      }

      // Clic sobre el fondo oscuro del <dialog> lo cierra
      if (e.target instanceof HTMLDialogElement && e.target.classList.contains("modal")) {
        const rect = e.target.getBoundingClientRect();
        const inside = e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (!inside) e.target.close();
        return;
      }

      const toaster = e.target.closest("[data-toast]");
      if (toaster) {
        e.preventDefault();
        toast(toaster.dataset.toast);
        return;
      }

      const toggle = e.target.closest("[data-toggle-password]");
      if (toggle) {
        const input = toggle.closest(".input-wrap").querySelector("input");
        const show = input.type === "password";
        input.type = show ? "text" : "password";
        toggle.setAttribute("aria-label", show ? "Ocultar contraseña" : "Mostrar contraseña");
        toggle.querySelector("[data-icon]").dataset.icon = show ? "eye-off" : "eye";
        renderIcons(toggle);
        return;
      }

      const segment = e.target.closest(".btn-group .btn");
      if (segment) {
        segment.parentElement.querySelectorAll(".btn").forEach((b) =>
          b.setAttribute("aria-pressed", String(b === segment)));
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderIcons();
    bindGlobalHandlers();
  });

  return { toast, openModal, closeModal, setFieldValidity, isEmail };
})();
