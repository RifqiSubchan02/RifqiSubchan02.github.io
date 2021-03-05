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
    });

    burger.classList.toggle('toggle');
  });
};

const carousel = () => {
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const customer = document.querySelector('section .content-testimonials .customers');
  const image = document.querySelector('.profile img');
  const name = document.querySelector('.profile div h2');
  const detail = document.querySelector('.profile div h3');
  const comment = document.querySelector('.customers p');

  const customerValue = [
    ["Edward Newgate", "Whitebeard Pirates Captain", "image/shirohige.jpg", `"I am just a man with one heart...Call me a demon, call me a monster...but I can't be the strongest forever...!!!"`],
    ["Gol D. Roger", "Roger Pirates Captain", "image/roger.png", `"My treasure? If you want it, you can have it. Search for it! I left it all in that place!"`],
    ["Monkey D. Luffy", "Strawhat Pirates Captain", "image/luffy.jpg", `"I don’t want to conquer anything. I just think the guy with the most freedom in this whole ocean… is the Pirate King!"`]
  ];
  for (let j = 0; j < customerValue.length; j++) {
    const slider = document.querySelector('.carousel-slider')
    const buttons = document.createElement('button');
    slider.appendChild(buttons);
  }
  const buttonSlider = document.querySelectorAll('.carousel-slider button');
  let i = 1;


  // First slider animation
  setTimeout(() => {
    customer.style.animation = `customerFade 2s ease forwards`;
    buttonSlider[i - 1].style.opacity = '1';
  }, 100);

  // Slider Interval
  setInterval(() => {
    if (customer.style.animation != '') {
      customer.style.animation = '';
    }
    if (i == customerValue.length) {
      i = 0;
    }
    // DOM Manipulation for Customer
    name.innerHTML = customerValue[i][0];
    detail.innerHTML = customerValue[i][1];
    image.src = customerValue[i][2];
    comment.innerHTML = customerValue[i][3];

    // DOM Manipulation for Nav Slider
    buttonSlider.forEach(element => {
      element.style.opacity = '0.5';
    });
    buttonSlider[i].style.opacity = '1';

    // Slider animation
    setTimeout(() => {
      customer.style.animation = `customerFade 2s ease forwards`;
    }, 100);

    i++;
  }, 5000);

  // Button next index slider
  next.addEventListener('click', () => {
    if (customer.style.animation != '') {
      customer.style.animation = '';
    }
    if (i == customerValue.length) {
      i = 0;
    }
    setTimeout(() => {
      customer.style.animation = `customerFade 2s ease forwards`;
    }, 100);
    name.innerHTML = customerValue[i][0];
    detail.innerHTML = customerValue[i][1];
    image.src = customerValue[i][2];
    comment.innerHTML = customerValue[i][3];
    buttonSlider.forEach(element => {
      element.style.opacity = '0.5';
    });
    buttonSlider[i].style.opacity = '1';
    ++i;
  });

  // Button previous index slider
  prev.addEventListener('click', () => {
    i -= 2;
    if (customer.style.animation != '') {
      customer.style.animation = '';
    }
    if (i < 0) {
      i = customerValue.length - 1;
    }
    setTimeout(() => {
      customer.style.animation = `customerFade 2s ease forwards`;
    }, 100);
    name.innerHTML = customerValue[i][0];
    detail.innerHTML = customerValue[i][1];
    image.src = customerValue[i][2];
    comment.innerHTML = customerValue[i][3];
    buttonSlider.forEach(element => {
      element.style.opacity = '0.5';
    });
    buttonSlider[i].style.opacity = '1';
    ++i;
  });

  for (let j = 0; j < buttonSlider.length; j++) {
    buttonSlider[j].addEventListener('click', () => {
      if (customer.style.animation != '') {
        customer.style.animation = '';
      }
      setTimeout(() => {
        customer.style.animation = `customerFade 2s ease forwards`;
      }, 100);
      name.innerHTML = customerValue[j][0];
      detail.innerHTML = customerValue[j][1];
      image.src = customerValue[j][2];
      comment.innerHTML = customerValue[j][3];
      buttonSlider.forEach(element => {
        element.style.opacity = '0.5';
      });
      buttonSlider[j].style.opacity = '1';
      i = j + 1;
    });
  }
}

navSlide();
carousel();