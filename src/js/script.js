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

// Keeping the sidebar nav closed on smaller screen sizes

const displayWindowSize = () => {
  const width = document.documentElement.clientWidth;

  console.log(width);

  if (width <= 768) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
};

window.addEventListener("resize", displayWindowSize);
window.addEventListener("load", displayWindowSize);
