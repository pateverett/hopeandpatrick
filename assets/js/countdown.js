(function () {
  "use strict";

  function initCountdown() {
    var el = document.getElementById("countdown");
    if (!el) return;

    var target = new Date(el.getAttribute("data-target")).getTime();
    var daysEl = el.querySelector('[data-unit="days"]');
    var hoursEl = el.querySelector('[data-unit="hours"]');
    var minutesEl = el.querySelector('[data-unit="minutes"]');
    var secondsEl = el.querySelector('[data-unit="seconds"]');

    function pad(n) {
      return String(n).padStart(2, "0");
    }

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        daysEl.textContent = "0";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        if (secondsEl) secondsEl.textContent = "00";
        return;
      }

      var s = Math.floor(diff / 1000);
      var days = Math.floor(s / 86400);
      var hours = Math.floor((s % 86400) / 3600);
      var minutes = Math.floor((s % 3600) / 60);
      var seconds = s % 60;

      daysEl.textContent = days;
      hoursEl.textContent = pad(hours);
      minutesEl.textContent = pad(minutes);
      if (secondsEl) secondsEl.textContent = pad(seconds);
    }

    tick();
    setInterval(tick, 1000);
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
        if (link.getAttribute("target") === "_blank") return;
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initStickyNav() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 0);
    }, { passive: true });
  }

  function initGate() {
    var form = document.getElementById("enter-form");
    if (!form) return;

    var input = document.getElementById("enter-password");
    var error = document.getElementById("enter-error");
    var expectedHash = form.getAttribute("data-hash");

    async function hash(text) {
      var data = new TextEncoder().encode(text);
      var digest = await crypto.subtle.digest("SHA-256", data);
      return Array.prototype.map
        .call(new Uint8Array(digest), function (b) {
          return b.toString(16).padStart(2, "0");
        })
        .join("");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      hash(input.value.trim().toLowerCase()).then(function (result) {
        if (result === expectedHash) {
          document.documentElement.classList.remove("pre-enter");
          try {
            sessionStorage.setItem("hp-entered", "true");
          } catch (e) {}
        } else {
          error.hidden = false;
          input.value = "";
          input.focus();
          form.classList.remove("shake");
          void form.offsetWidth;
          form.classList.add("shake");
        }
      });
    });
  }

  function initFAQ() {
    document.querySelectorAll(".faq-item").forEach(function (details) {
      var content = details.querySelector("p");
      if (!content) return;

      details.addEventListener("click", function (e) {
        if (!e.target.closest("summary")) return;
        e.preventDefault();

        if (details.open) {
          content.style.overflow = "hidden";
          content.style.maxHeight = content.scrollHeight + "px";
          requestAnimationFrame(function () {
            content.style.transition = "max-height 0.28s ease, opacity 0.28s ease";
            content.style.maxHeight = "0";
            content.style.opacity = "0";
          });
          setTimeout(function () {
            details.removeAttribute("open");
            content.removeAttribute("style");
          }, 300);
        } else {
          details.setAttribute("open", "");
          var h = content.scrollHeight;
          content.style.overflow = "hidden";
          content.style.maxHeight = "0";
          content.style.opacity = "0";
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              content.style.transition = "max-height 0.28s ease, opacity 0.28s ease";
              content.style.maxHeight = h + "px";
              content.style.opacity = "1";
            });
          });
          setTimeout(function () {
            content.removeAttribute("style");
          }, 300);
        }
      });
    });
  }

  function initGallery() {
    var grid = document.getElementById("gallery-grid");
    var lightbox = document.getElementById("lightbox");
    if (!grid || !lightbox) return;

    var items = Array.prototype.slice.call(grid.querySelectorAll(".gallery-item"));
    var image = document.getElementById("lightbox-image");
    var closeBtn = document.getElementById("lightbox-close");
    var prevBtn = document.getElementById("lightbox-prev");
    var nextBtn = document.getElementById("lightbox-next");
    var currentIndex = 0;
    var lastFocused = null;

    function show(index) {
      currentIndex = (index + items.length) % items.length;
      var img = items[currentIndex].querySelector("img");
      image.src = img.src;
      image.alt = img.alt;
    }

    function open(index) {
      lastFocused = document.activeElement;
      show(index);
      lightbox.hidden = false;
      closeBtn.focus();
      document.body.style.overflow = "hidden";
    }

    function close() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    items.forEach(function (item, index) {
      item.addEventListener("click", function () {
        open(index);
      });
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () { show(currentIndex - 1); });
    nextBtn.addEventListener("click", function () { show(currentIndex + 1); });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) close();
    });

    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") show(currentIndex - 1);
      if (event.key === "ArrowRight") show(currentIndex + 1);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initCountdown();
    initNavToggle();
    initStickyNav();
    initGate();
    initFAQ();
    initGallery();
  });
})();
