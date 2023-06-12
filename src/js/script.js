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

// Keeping the side navigation closed on smaller screen sizes

const displayWindowSize = () => {
  const width = document.documentElement.clientwidth;

  if (width <= 820) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
};

window.addEventListener("resize", displayWindowSize);
