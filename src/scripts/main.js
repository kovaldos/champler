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
        "Аккаунт",
        "Избранное",
        "Поиск",
        "Оформление заказа",
        "Страница не найдена",
        "Каталог",
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
              .querySelector(".header-bottom__img_for-men")
              .classList.add("_hidden");
            document
              .querySelector(".sub-menu__list_collections")
              .classList.remove("_hidden");
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
              .querySelector(".header-bottom__img_for-men")
              .classList.add("_hidden");
            document
              .querySelector(".sub-menu__list_kinds-of-sports")
              .classList.remove("_hidden");
            document
              .querySelector(".header-bottom__img_kinds-of-sports")
              .classList.remove("_hidden");
          }
          if (
            document.title == pageTitles[6] ||
            document.title == pageTitles[11]
          ) {
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
          if (
            document.title == pageTitles[7] ||
            document.title == pageTitles[12] ||
            document.title == pageTitles[15]
          ) {
            document.querySelector(".breadcrumbs__link._current").textContent =
              document.title;
            document
              .querySelector(".header-bottom__banner")
              .classList.add("_hidden");
            document
              .querySelector(".header-bottom .sub-menu")
              .classList.add("_hidden");
          }
          if (
            document.title == pageTitles[8] ||
            document.title == pageTitles[9] ||
            document.title == pageTitles[10] ||
            document.title == pageTitles[13] ||
            document.title == pageTitles[14]
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
          }
          if (
            document.title == pageTitles[8] ||
            document.title == pageTitles[9] ||
            document.title == pageTitles[10] ||
            document.title == pageTitles[11] ||
            document.title == pageTitles[12] ||
            document.title == pageTitles[13] ||
            document.title == pageTitles[14]
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

  // Показ и скрытие элементов страницы Конец

  // ToDo
  // Сделать нормальные Хлебные крошки
  // Сделать добавление в избранное

  // Белый хедер на мобайле Старт
  const header = document.querySelector(".header-top");
  if (header) {
    if (header.offsetWidth <= 1024) {
      header.classList.add("_white");
    }
  }

  // Белый хедер на мобайле Финиш

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

  // Внутренние табы
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
      document
        .querySelector(".header-top__logo-img")
        .classList.toggle("_black");
    });
    // Mobile sub-menu

    const subMenuLinks = document.querySelectorAll(
      ".header-top__list.left .menu__link-btn"
    );
    if (subMenuLinks.length) {
      subMenuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const item = e.target.closest(".menu__item");
          const backBtn = document.querySelector(".sub-menu-back-btn");
          const logoBox = document.querySelector(".header-top__logo-box");
          const logoLink = document.querySelector(".header-top__logo-link");
          item.classList.add("_active");
          backBtn.classList.add("_active");
          logoBox.removeChild(logoLink);
          logoBox.classList.add("_changed");
          logoBox.textContent = item.firstChild.textContent;
          backBtn.addEventListener("click", () => {
            item.classList.remove("_active");
            logoBox.classList.remove("_changed");
            logoBox.textContent = null;
            logoBox.appendChild(logoLink);
            backBtn.classList.remove("_active");
          });
          iconMenu.addEventListener("click", () => {
            if (item.classList.contains("_active")) {
              item.classList.remove("_active");
              logoBox.classList.remove("_changed");
              logoBox.textContent = null;
              logoBox.appendChild(logoLink);
              backBtn.classList.remove("_active");
            }
          });
          const subSubMenuLinks = document.querySelectorAll(".menu__sub-link-btn");
          subSubMenuLinks.forEach((link) => {
            link.addEventListener("click", (e)=> {
              const parentItem = e.target.closest(".header-top__sub-list-item-col");
              const subBackBtn = document.querySelector(".sub-sub-menu-back-btn");
              parentItem.classList.add("_active");
              backBtn.classList.remove("_active");
              subBackBtn.classList.add("_active");
              logoBox.textContent = parentItem.childNodes[1].textContent;
              subBackBtn.addEventListener("click", () => {
                parentItem.classList.remove("_active");
                logoBox.textContent = item.firstChild.textContent;
                subBackBtn.classList.remove("_active");
                backBtn.classList.add("_active");
              });
              iconMenu.addEventListener("click", () => {
                if (parentItem.classList.contains("_active")) {
                  item.classList.remove("_active");
                  parentItem.classList.remove("_active");
                  logoBox.classList.remove("_changed");
                  logoBox.textContent = null;
                  logoBox.appendChild(logoLink);
                  subBackBtn.classList.remove("_active");
                  backBtn.classList.remove("_active");
                }
              });
            })
          });
        });
      });
    }
  }

  // Burger menu End

  // Mask for phone number Start

  const inputTel = document.getElementById("tel");

  if (inputTel) {
    var phoneMask = IMask(inputTel, {
      mask: "+{7} (000) 000-00-00",
    });
  }

  const signInInput = document.getElementById("sign-in-input");

  if (signInInput) {
    var phoneMask = IMask(signInInput, {
      mask: "+{7} (000) 000-00-00",
    });
  }

  const signUpInput = document.getElementById("sign-up-input");

  if (signUpInput) {
    var phoneMask = IMask(signUpInput, {
      mask: "+{7} (000) 000-00-00",
    });
  }

  // Mask for phone number End

  // check password

  const passInput = document.getElementById("password");
  const passCheckInput = document.getElementById("passwordCheck");
  if (passInput && passCheckInput) {
    const passError = document.querySelector(".pass-error");
    passInput.addEventListener("change", () => {
      passCheckInput.addEventListener("change", () => {
        if (passCheckInput.value !== passInput.value) {
          passInput.classList.add("not-the-same");
          passCheckInput.classList.add("not-the-same");
          passError.classList.remove("_hidden");
        } else {
          passInput.classList.remove("not-the-same");
          passCheckInput.classList.remove("not-the-same");
          passError.classList.add("_hidden");
        }
      });
    });
  }

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

  // slider inside slider1 Start
  // const swiperInner = new Swiper(".slider-inner", {
  //   // Optional parameters
  //   grabCursor: true,
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   nested: true,
  //   // If we need pagination
  //   pagination: {
  //     el: ".slider-inner__pagination",
  //     type: "bullets"
  //   },
  // });

  // slider inside slider1 End

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
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: true,
    invert: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".slider4__btn-next",
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

  // favorite slider Start

  const swiperFavorite = new Swiper(".favorite__slider", {
    watchOverflow: true,
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    autoplay: false,
    initialSlide: 0,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //   425: {
    //     slidesPerView: "auto",
    //   },
    //   640: {
    //     slidesPerView: "auto",
    //   },
    //   1024: {
    //     slidesPerView: "auto",
    //   },
    // },
  });

  const slidesQuantity = swiperFavorite.slides.length;

  if (slidesQuantity > 4) {
    navigationShow(swiperFavorite);
  }

  // favorite slider End

  // reviews slider Start

  const reviewsSwiper = new Swiper(".reviews-slider__container", {
    watchOverflow: true,
    direction: "horizontal",
    slidesPerGroup: 1,
    initialSlide: 0,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: ".reviews-slider__button-next",
      prevEl: ".reviews-slider__button-prev",
    },
    breakpoints: {
      425: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });

  const reviewsQuantity = reviewsSwiper.slides.length;

  if (reviewsQuantity > 4) {
    navigationShow(reviewsSwiper);
  }

  // reviews slider End

  // favorite toggle Start

  const addToFav = () => {
    const favBtns = document.querySelectorAll(".fav-btn");
    if (favBtns) {
      favBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("_active");
        });
      });
    }
  };

  addToFav();

  // favorite toggle End

  // init image zoom Start

  mediumZoom("[data-zoomable]", {
    margin: 50,
    background: "#3D3D3D",
    scrollOffset: 100,
  });

  // init image zoom End

  // rotate arrow in select Start
  const selectWrappers = document.querySelectorAll(
    ".good-card__select-wrapper"
  );
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
  const myMap = document.getElementById("map");
  if (myMap) {
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
  }

  // y-maps End

  // Accordion Start
  const accordion = document.querySelector(".accordion-container");
  if (accordion) {
    new Accordion(accordion);
  }

  const accordion02 = document.querySelector(".goods__filter-ac-container");
  if (accordion02) {
    new Accordion(accordion02);
  }

  // Accordion End

  // Ползунок фильтра по цене Старт
  const rangeSlider = document.getElementById("range-slider");

  if (rangeSlider) {
    let input0 = document.getElementById("input-0");
    let input1 = document.getElementById("input-1");
    let inputs = [input0, input1];
    let minPrice = Number(input0.dataset.priceMin);
    let maxPrice = Number(input1.dataset.priceMax);
    let minPriceCurrent = Number(input0.value);
    let maxPriceCurrent = Number(input1.value);
    noUiSlider.create(rangeSlider, {
      start: [minPriceCurrent, maxPriceCurrent],
      connect: true,
      step: 1000,
      range: {
        min: [minPrice],
        max: [maxPrice],
      },
    });

    // const input0 = document.getElementById('arrFilter_P1_MIN');
    // const input1 = document.getElementById('arrFilter_P1_MAX');
    // const inputs = [input0, input1];

    rangeSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);

      let inputValue0 = Number(input0.value);
      let inputValue1 = Number(input1.value);

      let priceFrom = document.getElementById("price-from");
      priceFrom.innerText = inputValue0;

      let priceTo = document.getElementById("price-to");
      priceTo.innerText = inputValue1;
    });
  }

  // Ползунок фильтра по цене Конец

  // Вставляем пробелы между разрядами цифр в ценах Старт

  const setSpaces = () => {
    const numbers = document.querySelectorAll(".number-spaced");
    if (numbers.length) {
      numbers.forEach((number) => {
        const spaced = number.innerHTML.replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          "$1 "
        );
        number.innerHTML = spaced;
      });
    }
  };

  setSpaces();

  // Вставляем пробелы между разрядами цифр в ценах Конец

  // custom-select

  const select = function () {
    let menuLocation = document.querySelectorAll(".custom-select__inner");
    let selectItem = document.querySelectorAll(".custom-select__label-item");

    menuLocation.forEach((item) => {
      item.addEventListener("click", selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener("click", selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle("_active");
    }

    function selectChoose() {
      let text = this.innerText;
      let location = this.closest(".custom-select");
      let currentText = location.querySelector(".custom-select__current ");
      currentText.innerText = text;
      location.classList.remove("_active");
    }
  };

  select();
});
