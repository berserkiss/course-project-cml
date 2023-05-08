function toggleNavigation() {
    const burgerButton = document.querySelector('.header__burger');
    const navigationMenu = document.querySelector('.header__navigation');
    
    burgerButton.addEventListener('click', function() {
      navigationMenu.classList.toggle('header__navigation_visible');
    });
  }
  
  toggleNavigation();