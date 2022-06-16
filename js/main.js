const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  loop: true,
  speed: 900,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      direction: "vertical",
      slidesPerView: 3,
      mousewheel: true,
      loop: true,
      spaceBetween: 110,
    },
    891: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});

const windowModal = document.querySelector(".modal");
const body = document.querySelector("body");
const buttonModal = document.querySelector(".main-display__button");

buttonModal.addEventListener("click", () => {
  windowModal.classList.add("active");
  body.classList.add("lock");
});

windowModal.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");
  if (!isModal) {
    windowModal.classList.remove("active");
    body.classList.remove("lock");
  }
});

window.onload = function () {
  jQuery("#user-city").text(ymaps.geolocation.city);
  jQuery("#user-city2").text(ymaps.geolocation.city);
};
