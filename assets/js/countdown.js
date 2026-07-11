(function () {
  "use strict";

  function initCountdown() {
    var el = document.getElementById("countdown");
    if (!el) return;

    var target = new Date(el.getAttribute("data-target")).getTime();
    var daysEl = el.querySelector('[data-unit="days"]');
    var hoursEl = el.querySelector('[data-unit="hours"]');
    var minutesEl = el.querySelector('[data-unit="minutes"]');

    function pad(n) {
      return String(n).padStart(2, "0");
    }

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        daysEl.textContent = "0";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        return;
      }

      var minutesTotal = Math.floor(diff / 60000);
      var days = Math.floor(minutesTotal / (60 * 24));
      var hours = Math.floor((minutesTotal - days * 60 * 24) / 60);
      var minutes = minutesTotal - days * 60 * 24 - hours * 60;

      daysEl.textContent = days;
      hoursEl.textContent = pad(hours);
      minutesEl.textContent = pad(minutes);
    }

    tick();
    setInterval(tick, 30000);
  }

  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initGate() {
    var enterBtn = document.getElementById("enter-btn");
    if (!enterBtn) return;

    enterBtn.addEventListener("click", function () {
      document.documentElement.classList.remove("pre-enter");
      try {
        sessionStorage.setItem("hp-entered", "true");
      } catch (e) {}
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initCountdown();
    initNavToggle();
    initGate();
  });
})();
