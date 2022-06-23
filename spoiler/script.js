// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
//     navigator.userAgent
//   ) &&
//   window.innerWidth > 768
// ) {
//   document.addEventListener("click", myfunc);
//   function myfunc(e) {
//     if (e.target.classList.contains("menu__btn")) {
//       const menuActive = e.target.closest(".menu__item");
//       menuActive.classList.toggle("active");
//     }
//     if (
//       !e.target.closest(".menu__item") &&
//       document.querySelectorAll(".menu__item.active").length > 0
//     ) {
//       document.querySelectorAll(".menu__item.active").forEach((elem) => {
//         elem.classList.remove("active");
//       });
//     }
//   }
// }

// if (window.innerWidth < 768) {
//   document.addEventListener("click", myfunc);
//   function myfunc(e) {
//     if (e.target.classList.contains("menu__btn")) {
//       const menuActive = e.target.closest(".menu__item");
//       menuActive.classList.toggle("active");
//     }
//     if (e.target.classList.contains("search-form__icon")) {
//       const menuActive = document.querySelector(".seacrh-form");
//       menuActive.classList.toggle("active");
//     }

//     console.log(e.target);
//   }

//   const [activeBurger, activeMenu] = [
//     document.querySelector(".burger"),
//     document.querySelector(".menu__body"),
//   ];

//   activeBurger.onclick = () => {
//     activeBurger.classList.toggle("active");
//     activeMenu.classList.toggle("active");
//   };
// }

// const text = "[]{[]}()";

// function skobki(text) {
//   if (text.length % 2 !== 0) {
//     return false;
//   }

//   let deffault = {
//     "]": "[",
//     "}": "{",
//     ")": "(",
//   };

//   let stack = [];

//   for (let index = 0; index < text.length; index++) {
//     const element = text[index];

//     if ([")", "}", "]"].indexOf(element) > -1) {
//       if (deffault[element] !== stack.pop()) {
//         return false;
//       }
//     } else {
//       stack.push(element);
//     }
//   }

//   return true;
// }

const testList = [2, 3, 5, 7, 8, 1];

const sortedList = testList.sort((a, b) => {
    console.log(a, b);
    return a - b 
})

console.log(sortedList);
