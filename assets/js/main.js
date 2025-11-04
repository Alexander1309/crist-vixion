document.addEventListener("DOMContentLoaded", function () {
  // Agregar clase activa al link de la navbar
  // y quitarla de los demás links
  const links = document.querySelectorAll(".navbar__link");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("navbar__link--active"));
      this.classList.add("navbar__link--active");
    });
  });

  // Btn para el scroll hacia arriba
  const btnUp = document.getElementById("btn__up");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    // Botón scroll to top
    if (
      document.body.scrollTop > 170 ||
      document.documentElement.scrollTop > 170
    ) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }

    // Navbar sticky
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  btnUp.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Cerrar el menú al hacer click en un link
  // y al hacer click fuera del menú
  const btnMenu = document.querySelector(".header__btnmenu");
  const menu = document.querySelector(".navbar__links");

  btnMenu.addEventListener("click", function () {
    menu.classList.toggle("navbar__links--active");
  });

  menu.addEventListener("click", function () {
    menu.classList.remove("navbar__links--active");
  });

  //Open modal
  const modal = document.querySelector("#modal__services");
  const btnModalClose = document.querySelector("#modal__btn-close");
  const btnModalOpen = document.querySelectorAll(".services__card");

  btnModalOpen.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.modal) - 1;
      const modalIcon = document.querySelector("#modal__icon");
      const modalTitle = document.querySelector("#modal__title");
      const modalDescription = document.querySelector("#modal__text");
      const service = services[index];

      modalIcon.dataset.lucide = service.icon;
      modalTitle.textContent = service.title;
      modalDescription.textContent = service.description;
      lucide.createIcons();

      modal.style.display = "block";
    });
  });

  btnModalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
