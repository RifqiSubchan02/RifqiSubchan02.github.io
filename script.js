const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');
  navLinks = document.querySelectorAll('.navbar li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
      console.log(link);
    });

    burger.classList.toggle('toggle');
  });
};

const carousel = () => {
  const customer = document.querySelectorAll('section .content-testimonials .customers');
  var i = 0;
  setInterval(function () {
    if (i < customer.length) {
      customer[i].classList.toggle('carousel-active');
      if (customer[i]) {
        customer[i].style.animation = `customerFade 1s ease forwards`;
      } else {
        customer[i].style.animation = '';
      }
      setTimeout(function () {
        customer[i - 1].classList.toggle('carousel-active');
      }, 5950);
      ++i;
    } else {
      i = 0;
    }
  }, 6000);

}

navSlide();
carousel();