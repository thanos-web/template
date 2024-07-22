
// МЕНЮ

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".burger_icon");
  const nav_burger_wrapper = document.querySelector(".nav_burger_wrapper");
  const closeIcon = document.querySelector(".closeicon");

  burger.addEventListener('click', () =>
    nav_burger_wrapper.classList.toggle("showMenu")
  );

  closeIcon.addEventListener('click', () => nav_burger_wrapper.classList.remove("showMenu"));

  const mobileMenu = document.querySelectorAll('.nav_burger a');
  mobileMenu.forEach(link => {
    link.addEventListener('click', () => {
      nav_burger_wrapper.classList.remove("showMenu")
    })
  })

});