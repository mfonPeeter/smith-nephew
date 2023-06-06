const submenuBtns = document.querySelectorAll(".btn-submenu");
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

submenuBtns.forEach((submenuBtn) => {
  submenuBtn.addEventListener("click", (e) => {
    const arrowParent = e.currentTarget.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
});

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
