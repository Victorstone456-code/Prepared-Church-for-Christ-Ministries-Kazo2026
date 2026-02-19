document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     PRELOADER
  ========================== */
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });
  }

  /* ==========================
     NAVBAR SHRINK
  ========================== */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  /* ==========================
     MOBILE MENU
  ========================== */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  /* ==========================
     SCROLL REVEAL
  ========================== */
  const reveals = document.querySelectorAll(".reveal");
  function revealOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  if (reveals.length > 0) {
    window.addEventListener("scroll", revealOnScroll);
  }

  /* ==========================
     TYPING SCRIPTURE (Joshua 1:8)
  ========================== */
  const typingElement = document.querySelector(".typing-text");

  if (typingElement) {
    const text = "Joshua 1:8 — This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night...";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
      if (!isDeleting) {
        typingElement.textContent = text.substring(0, index++);
        if (index > text.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2000);
          return;
        }
      } else {
        typingElement.textContent = text.substring(0, index--);
        if (index === 0) {
          isDeleting = false;
        }
      }
      setTimeout(typeEffect, isDeleting ? 40 : 70);
    }

    typeEffect();
  }

  /* ==========================
     COUNTERS
  ========================== */
  const counters = document.querySelectorAll(".counter");
  if (counters.length > 0) {
    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }

});
