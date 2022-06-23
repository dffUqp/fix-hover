const [activeBurger, activeMenu] = [
    document.querySelector(".burger"),
    document.querySelector(".menu"),
  ];

  activeBurger.onclick = () => {
    activeBurger.classList.toggle("active");
    activeMenu.classList.toggle("active");

    document.querySelector("body").classList.toggle("active");
  };

