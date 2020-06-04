const scrolledNav = () => {
  const navbar = document.querySelector('#js-scroll-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 450) {
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.add('bg-transparent');
      }
    });
  }
}

export { scrolledNav }
