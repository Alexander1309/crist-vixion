// Agregar clase activa al link de la navbar
// y quitarla de los demás links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar__link");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("navbar__link--active"));
      this.classList.add("navbar__link--active");
    });
  });

  // Btn para el scroll hacia arriba
  const btn = document.getElementById("btn__up");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 170 ||
      document.documentElement.scrollTop > 170
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
