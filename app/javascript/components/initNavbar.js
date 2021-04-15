const initNavbar = () => {
  const mainMenuButton = document.querySelector('.menu-button');
  const mainMenu = document.querySelector('.main-menu');

  const mobileMenuButton = document.querySelector('.navbar-mobile');
  const mobileMenu = document.querySelector('.main-menu-mobile');

  mainMenuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
  })

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
    document.getElementById("menu-text").innerHTML = "TAP  TO  COLLAPSE";
    } else {
      document.getElementById("menu-text").innerHTML = "MENU";
    }
  })
}

export { initNavbar }
