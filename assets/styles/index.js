/* Swiper JS */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const menuOpen = document.querySelector(".side-menu-btn");
const menuClose = document.querySelector(".close-btn");
const menu = document.querySelector(".side-menu");
const logo = document.querySelector(".logo");
const upTo = document.querySelector(".upto-btn");
const pcMenu = document.querySelector(".header-assets");
const mobileMenu = document.querySelector(".side-btns");

/* 사이드메뉴 */
menuOpen.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.add("active");
});

menuClose.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.remove("active");
});

/* 로고 */
logo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* pc 메뉴바 */
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    pcMenu.classList.add("active");
    mobileMenu.classList.add("active");
  } else {
    pcMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

/* upto 버튼 */
upTo.addEventListener("click", (evt) => {
  evt.preventDefault();

  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
addEventListener("scroll", () => {
  let upToHeight = document.documentElement.scrollTop;

  if (upToHeight > 600) {
    upTo.style.opacity = 1;
    upTo.style.pointerEvents = "auto";
  } else {
    upTo.style.opacity = 0;
    upTo.style.pointerEvents = "none";
  }
});
