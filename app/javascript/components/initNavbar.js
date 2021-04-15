const initNavbar = () => {
  const mainMenuButton = document.querySelector('.menu-button');
  const mainMenu = document.querySelector('.main-menu');

  mainMenuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
  })
}

export { initNavbar }
