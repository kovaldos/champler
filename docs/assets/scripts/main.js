// Показ и скрытие элементов страницы Старт
// При натяжке на БУС этот оверкод не нужен
// Сделан для демонстрации верстки
document.addEventListener("DOMContentLoaded", () => {
  const hideOrShowElements = () => {
    const headers = document.querySelectorAll("header");
    const footers = document.querySelectorAll("footer");

    if (headers && footers) {
      const pageTitles = [
        "Карта сайта",
        "Главная",
        "Мужчинам",
        "Женщинам",
        "Коллекции",
        "Виды спорта",
        "Мужская одежда",
        "Футболка чёрная с логотипом",
        "Помощь",
        "Контакты",
        "Мои данные",
      ];

      headers.forEach((header) => {
        if (pageTitles.length) {
          if (document.title == pageTitles[0]) {
            header.classList.add("_hidden");
          }
          if (document.title !== pageTitles[1]) {
            document.querySelector(".header-top").classList.add("_white");
            document.querySelector(".header-top").classList.add("_fixed");
          }
          if (document.title == pageTitles[1]) {
            document.querySelector(".header-bottom").classList.add("_hidden");
          }
          if (document.title == pageTitles[4]) {
            document.querySelector(".header-bottom__title").textContent =
              pageTitles[4];
            document.querySelector(".breadcrumbs__link._current").textContent =
              document.title;
            document
              .querySelector(".sub-menu__list_for-men")
              .classList.add("_hidden");
            document
              .querySelector(".sub-menu__list_collections")
              .classList.remove("_hidden");
            document
              .querySelector(".header-bottom__img_for-men")
              .classList.add("_hidden");
            document
              .querySelector(".header-bottom__img_collections")
              .classList.remove("_hidden");
          }
          if (document.title == pageTitles[5]) {
            document.querySelector(".header-bottom__title").textContent =
              pageTitles[5];
            document.querySelector(".breadcrumbs__link._current").textContent =
              pageTitles[5];
            document
              .querySelector(".sub-menu__list_for-men")
              .classList.add("_hidden");
            document
              .querySelector(".sub-menu__list_kinds-of-sports")
              .classList.remove("_hidden");
            document
              .querySelector(".header-bottom__img_for-men")
              .classList.add("_hidden");
            document
              .querySelector(".header-bottom__img_kinds-of-sports")
              .classList.remove("_hidden");
          }
          if (document.title == pageTitles[6]) {
            document
              .querySelector(".header-bottom__banner")
              .classList.add("_hidden");
            document
              .querySelector(".header-bottom .sub-menu")
              .classList.add("_hidden");
            const breadCrumps = header.querySelector(".breadcrumbs__list");
            const breadcrumpsItem = document.createElement("li");
            breadcrumpsItem.classList.add("breadcrumbs__link");
            if (breadCrumps !== null) {
              breadcrumpsItem.textContent = " / " + document.title;
              breadCrumps.appendChild(breadcrumpsItem);
            }
          }
          if (document.title == pageTitles[7]) {
            document.querySelector(".breadcrumbs__link._current").textContent =
              document.title;
            document
              .querySelector(".header-bottom__banner")
              .classList.add("_hidden");
          }
          if (
            document.title == pageTitles[8] ||
            document.title == pageTitles[9]
          ) {
            document.querySelector(".breadcrumbs__link._current").textContent =
              document.title;
            document
              .querySelector(".header-bottom__banner")
              .classList.add("_hidden");
          }
        }
      });

      footers.forEach((footer) => {
        if (pageTitles.length) {
          if (document.title == pageTitles[0]) {
            footer.classList.add("_hidden");
          }
          if (document.title !== pageTitles[1]) {
            document
              .querySelector(".footer-top .news-promo")
              .classList.add("_hidden");
            document
              .querySelector(".header-bottom .sub-menu")
              .classList.add("_hidden");
          }
          if (
            document.title !== pageTitles[1] ||
            document.title !== pageTitles[2] ||
            document.title !== pageTitles[3] ||
            document.title !== pageTitles[4] ||
            document.title !== pageTitles[5] ||
            document.title !== pageTitles[6]
          ) {
            document.querySelector(".footer-top").classList.add("_hidden");
            document
              .querySelector(".header-bottom .sub-menu")
              .classList.add("_hidden");
          }
        }
      });
    }
  };

  hideOrShowElements();
});

// ToDo
// Сделать нормальные Хлебные крошки

// Показ и скрытие элементов страницы Конец

// Переключение табов Start

const tabItems = document.querySelectorAll(".tabs__link");
const tabBlocks = document.querySelectorAll(".tabs__item");

tabItems.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let tabLink = item.getAttribute("href");
    let currentBlock = document.querySelector(tabLink);
    if (!item.classList.contains("_active")) {
      tabItems.forEach((item) => {
        item.classList.remove("_active");
      });
      tabBlocks.forEach((item) => {
        item.classList.remove("_active");
      });
      item.classList.add("_active");
      currentBlock.classList.add("_active");
    }
  });
  document.querySelector(".tabs__link").click();
}

const tabItemsInner = document.querySelectorAll(".size-table__tabs-switch");
const tabBlocksInner = document.querySelectorAll(".size-table__tabs-block");

tabItemsInner.forEach(onTabClickInner);

function onTabClickInner(item) {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let tabLink = item.getAttribute("href");
    let currentBlock = document.querySelector(tabLink);
    if (!item.classList.contains("_active")) {
      tabItemsInner.forEach((item) => {
        item.classList.remove("_active");
      });
      tabBlocksInner.forEach((item) => {
        item.classList.remove("_active");
      });
      item.classList.add("_active");
      currentBlock.classList.add("_active");
    }
  });
  document.querySelector(".size-table__tabs-switch").click();
}

// Переключение табов End

// Бегущая строка на главной Старт

function animateMarquee(el, duration) {
  const innerEl = el.querySelector(".marquee__inner");
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  el.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    requestAnimationFrame(step);
  });
}

const marquee1 = document.querySelector("#marquee1");
const marquee2 = document.querySelector("#marquee2");

if (marquee1 && marquee2) {
  animateMarquee(marquee1, 35000);
  animateMarquee(marquee2, 40000);
}

// Бегущая строка на главной Конец

// Burger menu Start

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    document.querySelector(".header-top__logo-img").classList.toggle("_white");
  });
}

// Burger menu End

// Mask for subscribe Start

// const emailMask = IMask(
// 	document.querySelector('.subscribe__input'),
// 	{
// 		mask: [
// 			{
// 				mask: /^\S*@?\S*$/
// 			}
// 		]
// 	});

// Mask for subscribe End

// slider1 Start

const swiper = new Swiper(".slider1", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 1024px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// slider1 End

// slider2 Start

const swiper2 = new Swiper(".slider2", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: true,
  initialSlide: 1,
  spaceBetween: 10,
  breakpoints: {
    641: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

// slider2 End

// slider3 Start

const swiper3 = new Swiper(".slider3", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: false,
  initialSlide: 0,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// slider3 End

// slider4 Start

const swiper4 = new Swiper(".slider4", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  autoplay: false,
  initialSlide: 0,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

// slider4 End

// slider-vertical Start

const swiper5 = new Swiper(".slider-vertical", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: false,
  initialSlide: 0,
  spaceBetween: 10,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 0,
    thresholdDelta: 20,
    thresholdTime: 300,
    forceToAxis: true,
  },
  breakpoints: {
    1025: {
      direction: "vertical",
      navigation: false,
    },
  },
});

// slider-vertical End

// init image zoom Start

mediumZoom("[data-zoomable]", {
  margin: 50,
  background: "#3D3D3D",
  scrollOffset: 100,
});

// init image zoom End

// rotate arrow in select Start
const selectWrappers = document.querySelectorAll(".good-card__select-wrapper");
if (selectWrappers.length) {
  selectWrappers.forEach((selectWrapper) => {
    selectWrapper.addEventListener("click", (e) => {
      selectWrapper.classList.toggle("icon-rotated");
      // setTimeout(() => {
      //   if (selectWrapper.classList.contains("icon-rotated")) {
      //     selectWrapper.classList.remove("icon-rotated");
      //   }
      // }, 10000);
    });
  });
}

// rotate arrow in select End

// y-maps Start

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.93, 30.28],
    zoom: 10,
  });

  //отключаем zoom карты колесом мыши
  myMap.behaviors.disable("scrollZoom");
  //на мобильных устройствах... (проверяем по userAgent браузера)
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    //... отключаем перетаскивание карты на мобильных устройствах
    myMap.behaviors.disable("drag");
  }
}

// y-maps End
