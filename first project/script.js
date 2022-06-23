if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  ) &&
  window.innerWidth < 768
) {
  const [activeBurger, activeMenu] = [
    document.querySelector(".burger"),
    document.querySelector(".list"),
  ];

  activeBurger.onclick = () => {
    activeBurger.classList.toggle("active");
    activeMenu.classList.toggle("active");

    document.querySelector("body").classList.toggle("active");
  };

  document.addEventListener("click", myfunc);
  function myfunc(e) {
    if (e.target.classList.contains("footer__btn")) {
      const menuActive = e.target.closest(".footer__text");
      menuActive.classList.toggle("active");
    }
  }
}
