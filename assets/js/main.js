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
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 170 ||
      document.documentElement.scrollTop > 170
    ) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
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
});
