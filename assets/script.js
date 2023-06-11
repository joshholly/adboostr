var modals = document.getElementsByTagName('dialog');
var tosModal = document.getElementById('tosModal');
var privacyModal = document.getElementById('privacyModal');
var closeBtns = document.getElementsByClassName('closeBtn');

// When the user clicks the close button, close the modal
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
      for (var j = 0; j < modals.length; j++) {
        modals[j].close();
      }
    }
    }

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.navLink');
  
    sections.forEach((section, index) => {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionMiddle = sectionTop + sectionHeight / 2;
  
      if (scrollPosition >= sectionMiddle) {
        navLinks.forEach((navLink) => {
            navLink.classList.add('text-white');
            navLink.classList.remove('text-gray-500');
        });
        navLinks[index].classList.add('text-gray-500');
        navLinks[index].classList.remove('text-white');
      }
    });
  });
  
  // Get the navbar-toggler button
  const navbarToggler = document.querySelector('#nav-toggler');
  
  // Get the mobile-nav div
  const mobileNav = document.querySelector('#nav-content');
  
  // Add click event listener to the navbar-toggler button
  navbarToggler.addEventListener('click', () => {
  // Toggle the hidden class on the mobile-nav div
  mobileNav.classList.toggle('hidden');
  });
  // Get a reference to the mobileNav using its id
  var mobileNavLinks = document.getElementById('nav-content');
  
  // Get a reference to all the links inside mobileNav
  var navLinks = mobileNavLinks.getElementsByTagName('a');
  
  // Add a click event listener to each link
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
      mobileNavLinks.classList.toggle('hidden');
    });
  }
  
  // Update your Swiper configuration
  // Set default delay
  let delay = 8000; // 8 seconds for mobile
  
  // Check if screen is larger than 1024px
  if (window.matchMedia("(min-width: 1024px)").matches) {
    delay = 15000; // 15 seconds for desktop
  }
  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: delay,  // delay between transitions (in ms)
    },
  
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',
    spaceBetween: 10,  // add space between slides
  
    breakpoints: {
      1024: {  
         slidesPerView: 3,
         slidesPerGroup: 3,
         spaceBetween: 15
      },
    },
  
    on: {
      init: function () {
        updateBullets(this);
      },
      resize: function () {
        updateBullets(this);
      }
    }
  })
  
  function updateBullets(swiper) {
    setTimeout(function () {
      var bullets = swiper.pagination.bullets;
      var slidesPerView = swiper.params.slidesPerView;
      if (window.innerWidth >= 1024) {
        slidesPerView = swiper.params.breakpoints[1024].slidesPerView;
      }
  
      for (var i = 0; i < bullets.length; i++) {
        if (i % slidesPerView === 0) {
          bullets[i].style.display = 'block';
        } else {
          bullets[i].style.display = 'none';
        }
      }
    }, 0);
  }
  
  $(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
  
      var successMessage = `
        <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
          Message Sent!
        </div>
        <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
          <p>Your message has been sent successfully. We will get back to you as soon as possible.</p>
        </div>
      `;
  
      $('.formContainer').html(successMessage);
    });
  });
  