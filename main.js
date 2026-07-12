(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var toggle = document.getElementById("navToggle");
  var panel = document.getElementById("mobilePanel");

  if (toggle && header && panel) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var gallery = document.getElementById("gallery");
  var moreBtn = document.getElementById("galleryMoreBtn");
  if (gallery && moreBtn) {
    moreBtn.addEventListener("click", function () {
      gallery.classList.add("is-expanded");
      moreBtn.setAttribute("aria-expanded", "true");
      moreBtn.style.display = "none";
    });
  }

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");
  if (gallery && lightbox && lightboxImg && lightboxClose) {
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

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
