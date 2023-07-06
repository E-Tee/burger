const menuItems = document.querySelectorAll(
  ".menu__item, .submenu__item, .sub-submenu__item"
);
const headerTitle = document.querySelector(".header__title");
const backButton = document.querySelector(".back-button");

let activeSubmenu = null;
let activeSubSubmenu = null;

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const submenu = menuItem.querySelector(".submenu");
    const subSubmenu = menuItem.querySelector(".sub-submenu");

    if (submenu && submenu.classList.contains("submenu-active")) {
      console.log("Закрываем подменю");
      activeSubmenu = null;
      submenu.classList.remove("submenu-active");
      headerTitle.textContent = "";
      backButton.classList.remove("back-button-active");
    } else if (submenu) {
      console.log("Открываем подменю");
      activeSubmenu = submenu;
      const activeSubmenus = document.querySelectorAll(".submenu-active");
      activeSubmenus.forEach((activeSubmenu) => {
        console.log("Закрываем другое открытое подменю");
        activeSubmenu.classList.remove("submenu-active");
      });
      submenu.classList.add("submenu-active");
      console.log("Открываем новое подменю");
      headerTitle.textContent = menuItem.textContent;
      backButton.classList.add("back-button-active");
    } else if (subSubmenu) {
      console.log("Открываем подменю третьего уровня");
      activeSubSubmenu = subSubmenu;
      const activeSubSubmenus = document.querySelectorAll(
        ".sub-submenu-active"
      );
      activeSubSubmenus.forEach((activeSubsubmenu) => {
        console.log("Закрываем другое открытое подменю третьего уровня");
        activeSubsubmenu.classList.remove("sub-submenu-active");
      });
      subSubmenu.classList.add("sub-submenu-active");
      console.log("Открываем новое подменю третьего уровня");
      headerTitle.textContent = menuItem.textContent;
    }
  });
});

backButton.addEventListener("click", () => {
  if (activeSubSubmenu) {
    console.log("Закрываем подменю третьего уровня");
    activeSubSubmenu.classList.remove("sub-submenu-active");
    activeSubSubmenu = null;
    headerTitle.textContent = activeSubmenu.parentElement.textContent;
  } else if (activeSubmenu) {
    console.log("Закрываем подменю");
    activeSubmenu.classList.remove("submenu-active");
    activeSubmenu = null;
    headerTitle.textContent = "";
    backButton.classList.remove("back-button-active");
  }
});
