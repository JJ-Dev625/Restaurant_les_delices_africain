document.addEventListener("DOMContentLoaded", () => {
  
  // ===== SLIDESHOW HERO =====
  const heroImages = [
    "./assets/images/inté.jpg",
    "./assets/images/int4.jpg",
    "./assets/images/int.jpg"
  ];
   const slideshow = document.querySelector(".hero-slideshow");
  let currentImageIndex = 0;

  if (slideshow && heroImages.length > 0) {
    // Image initiale
    slideshow.style.backgroundImage = `url('${heroImages[0]}')`;

    // Boucle de changement
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      slideshow.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
    }, 8000); // 8 secondes pour un enchaînement plus dynamique
  }

// ===== NAVIGATION MOBILE (BURGER MENU) =====
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navbar = document.querySelector(".navbar");

  if (navToggle && navbar) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navbar.classList.toggle("active");
      // Empêche le défilement de la page quand le menu est ouvert
      document.body.style.overflowY = navbar.classList.contains("active") ? "hidden" : "initial";
    });
  }

   // ===== SCROLL SMOOTH (DÉFILEMENT FLUIDE) =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Ferme le menu mobile si un lien est cliqué
        if (navbar && navbar.classList.contains("active")) {
          navToggle.classList.remove("active");
          navbar.classList.remove("active");
          document.body.style.overflowY = "initial";
        }

        // Calcul de la position finale en prenant en compte la hauteur du header fixe
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
   // ===== BIENVENUE & SUBMIT DU FORMULAIRE =====
  const reservationForm = document.getElementById("reservation-form");
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Amélioration de l'alerte de confirmation
      alert("✅ Réservation bien reçue ! Nous vérifions nos disponibilités et vous contacterons rapidement par SMS ou appel.");
      
      this.reset();
      
      // Réinitialisation manuelle des labels flottants après reset
      this.querySelectorAll('input').forEach(input => {
        input.blur();
      });
    });
  }
});
