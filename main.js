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

  var mapFacade = document.getElementById("mapFacade");
  var mapBtn = document.getElementById("mapLoadBtn");
  if (mapFacade && mapBtn) {
    mapBtn.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps?q=41.1065368,-8.6017534&z=17&output=embed";
      iframe.title = "Mapa com a localização do Bloco de Notas";
      iframe.loading = "lazy";
      iframe.setAttribute("allowfullscreen", "");
      mapFacade.innerHTML = "";
      mapFacade.appendChild(iframe);
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
