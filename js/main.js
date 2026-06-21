/* =========================================================
   LaMPAD · interações
   "O Grid" (hero), menu mobile, reveal no scroll, ano,
   link do calendário público.
   ========================================================= */
(function () {
  "use strict";

  /* -------- Configuração editável --------
     Troque pelos links oficiais quando disponíveis. */
  var CONFIG = {
    // URL do calendário público do Google. Vazio = usa e-mail.
    publicCalendarUrl: "",
    // Site do AI Horizon Labs (crédito no rodapé).
    aiHorizonUrl: "https://sites.unipampa.edu.br/lampad/"
  };

  /* -------- "O Grid": infraestrutura real como nós -------- */
  function buildGrid() {
    var host = document.getElementById("grid-nodes");
    if (!host) return;

    var nodes = [];
    // Grid 01 · 6 workstations com GPU
    ["RTX 5090", "RTX 5080", "RTX 5080", "RTX 3060", "RTX 3060", "RTX 3060"]
      .forEach(function (g) { nodes.push({ type: "gpu", label: g }); });
    // Grid 02 · 10 servidores i7-9700
    for (var i = 0; i < 10; i++) nodes.push({ type: "cpu", label: "i7-9700" });
    // Grid 03 · 7 servidores i7-7700
    for (var j = 0; j < 7; j++) nodes.push({ type: "cpu", label: "i7-7700" });

    // Nós "em uso" (determinístico, só estética)
    var live = { 0: 1, 7: 1, 12: 1, 18: 1, 21: 1 };

    var frag = document.createDocumentFragment();
    nodes.forEach(function (n, idx) {
      var el = document.createElement("div");
      el.className = "node";
      el.setAttribute("data-type", n.type);
      if (live[idx]) el.setAttribute("data-live", "");
      var tip = document.createElement("span");
      tip.className = "node-tip";
      tip.textContent = n.label;
      el.appendChild(tip);
      frag.appendChild(el);
    });
    host.appendChild(frag);
  }

  /* -------- Menu mobile -------- */
  function mobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var list = document.getElementById("nav-list");
    if (!toggle || !list) return;

    function close() {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });
  }

  /* -------- Reveal no scroll -------- */
  function reveal() {
    var targets = document.querySelectorAll(
      ".section-head, .section-body, .cards-3 > *, .partner-group, .people > *, .cta-band, .contact-inner"
    );
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("in"); });
      return;
    }
    targets.forEach(function (t) { t.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* -------- Links configuráveis e ano -------- */
  function wireLinks() {
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    var cal = document.querySelector("[data-cal-link]");
    if (cal) {
      if (CONFIG.publicCalendarUrl) {
        cal.setAttribute("href", CONFIG.publicCalendarUrl);
        cal.setAttribute("target", "_blank");
        cal.setAttribute("rel", "noopener");
      } else {
        cal.setAttribute("href", "mailto:lampad@unipampa.edu.br?subject=Consulta%20de%20disponibilidade%20-%20LaMPAD");
      }
    }

    var ah = document.querySelector("[data-ai-horizon]");
    if (ah && CONFIG.aiHorizonUrl) ah.setAttribute("href", CONFIG.aiHorizonUrl);
  }

  function init() {
    buildGrid();
    mobileNav();
    reveal();
    wireLinks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
