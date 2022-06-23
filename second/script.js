const [activeBurger, activeMenu] = [
  document.querySelector(".burger"),
  document.querySelector(".menu"),
];

activeBurger.onclick = () => {
  activeBurger.classList.toggle("active");
  activeMenu.classList.toggle("active");

  document.querySelector("body").classList.toggle("active");
};

console.log(window.innerWidth);

if (window.innerWidth <= 505) {
  const servicesImages = document.querySelector(".services__images");
  const servicesImageBlock = document.querySelector(".services__image");

  servicesImages.appendChild(servicesImageBlock);
}

document.addEventListener("click", myfunc);
function myfunc(e) {
  if (e.target.classList.contains("footer__spoiler__btn")) {
    console.log(e.target.closest(".footer__item"));
    const menuActive = e.target.closest(".footer__item");
    menuActive.classList.toggle("active");
  }
}
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  ) &&
  window.innerWidth < 768
) {
  const ActionLanguage = document.querySelector(".header__action.language");

  ActionLanguage.onclick = () => {
    ActionLanguage.classList.toggle("active");
  };
}
