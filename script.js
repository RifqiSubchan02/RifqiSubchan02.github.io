const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');
  navLinks = document.querySelectorAll('.navbar li');
  const h1 = document.querySelector('.description-header h1');
  const p = document.querySelector('.description-header p');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    if (nav.getAttribute('class') === 'navbar nav-active') {
      h1.style.position = 'static';
      h1.style.marginBottom = '0px';
      p.style.marginTop = '20px';
    } else {
      h1.style.position = 'absolute';
      h1.style.marginBottom = '10px';
      p.style.marginTop = '60px';
    }
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();