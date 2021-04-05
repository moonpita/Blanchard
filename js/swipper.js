const swiperGalary = new Swiper('.swiper-container-galary', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    direction: 'horizontal',
    slidesPerGroup: 1,
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1641: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },

      1441: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },

      1200: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },

      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },

      561: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },

      480: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
    }

  });

const swiperEvents = new Swiper('.swiper-container-events', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 49,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination-events',
    },

  });

const swiperEditions = new Swiper('.swiper-container-editions', {
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1441: {
        slidesPerColumn: 1,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1201: {
        slidesPerView: 2,
      },
      940: {
        slidesPerView: 2,
      },
    }

  });

const swiperProjects = new Swiper('.swiper-container-projects', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    direction: 'horizontal',
    slidesPerGroup: 1,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next-projects',
      prevEl: '.swiper-button-prev-projects',
    },

    breakpoints: {
      1641: {
        slidesPerView: 3,
      },
      1441: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      560: {
        slidesPerView: 1,
      }
    }

  });
