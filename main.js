(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var header = document.getElementById("site-header");
  var toggle = document.getElementById("navToggle");
  var panel = document.getElementById("mobilePanel");

  if (toggle && header && panel) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- FAQ accordion (single-open, animated) ---------- */
  var faqList = document.getElementById("faqList");
  if (faqList) {
    var questions = Array.prototype.slice.call(faqList.querySelectorAll(".faq-q"));

    function setOpen(btn, open) {
      var answer = btn.nextElementSibling;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
      } else {
        answer.style.maxHeight = "0px";
        answer.style.opacity = "0";
      }
    }

    questions.forEach(function (btn) {
      // Sync initial state (first item is open by default in markup)
      setOpen(btn, btn.getAttribute("aria-expanded") === "true");

      btn.addEventListener("click", function () {
        var willOpen = btn.getAttribute("aria-expanded") !== "true";
        questions.forEach(function (other) {
          if (other !== btn) setOpen(other, false);
        });
        setOpen(btn, willOpen);
      });
    });

    // Keep the open panel sized correctly on resize
    window.addEventListener("resize", function () {
      questions.forEach(function (btn) {
        if (btn.getAttribute("aria-expanded") === "true") {
          var answer = btn.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- Gallery "show more" ---------- */
  var gallery = document.getElementById("gallery");
  var galleryMoreBtn = document.getElementById("galleryMoreBtn");
  if (gallery && galleryMoreBtn) {
    galleryMoreBtn.addEventListener("click", function () {
      gallery.classList.remove("is-collapsed");
      galleryMoreBtn.setAttribute("aria-expanded", "true");
      galleryMoreBtn.hidden = true;
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");

  if (gallery && lightbox && lightboxImg && lightboxClose && typeof lightbox.showModal === "function") {
    gallery.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-src]");
      if (!btn) return;
      lightboxImg.src = btn.getAttribute("data-src");
      lightboxImg.alt = btn.getAttribute("data-alt") || "";
      lightbox.showModal();
    });
    lightboxClose.addEventListener("click", function () {
      lightbox.close();
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var submitBtn = document.getElementById("cf-submit");

  if (form && status) {
    var CONFIGURED = form.action.indexOf("REPLACE_WITH_FORM_ID") === -1;

    function showStatus(kind, message) {
      status.className = "form-status is-" + kind;
      status.textContent = message;
    }

    function buildMailto() {
      var d = new FormData(form);
      var lines = [
        "Nome: " + (d.get("nome") || ""),
        "Email: " + (d.get("email") || ""),
        "Telemóvel: " + (d.get("telemovel") || ""),
        "Interesse: " + (d.get("interesse") || ""),
        "",
        d.get("mensagem") || ""
      ];
      return "mailto:blocodnotas@gmail.com" +
        "?subject=" + encodeURIComponent("Contacto pelo site: " + (d.get("nome") || "")) +
        "&body=" + encodeURIComponent(lines.join("\n"));
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot: silently accept bots without sending
      if (form.querySelector('[name="_gotcha"]').value) {
        showStatus("success", "Obrigado! A sua mensagem foi enviada.");
        return;
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Fallback while no backend is configured: open the user's email client.
      if (!CONFIGURED) {
        window.location.href = buildMailto();
        showStatus("success", "Abrimos o seu email com a mensagem pronta a enviar. Se não abriu, escreva para blocodnotas@gmail.com.");
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "A enviar…";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          showStatus("success", "Obrigado! A sua mensagem foi enviada. Entraremos em contacto brevemente.");
        } else {
          showStatus("error", "Não foi possível enviar. Ligue-nos para 910 533 646 ou escreva para blocodnotas@gmail.com.");
        }
      }).catch(function () {
        showStatus("error", "Sem ligação no momento. Ligue-nos para 910 533 646 ou escreva para blocodnotas@gmail.com.");
      }).then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar mensagem";
      });
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
