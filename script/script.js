const navLink = document.querySelectorAll(".nav-items a"),
 pagelink = document.querySelectorAll(".page-list a"),
  locations = location.pathname;

navLink.forEach(el => {
  const link = el.getAttribute("href");
  if (locations === link) {
    const active = document.querySelector(".active-link");
    if (active) {
      active.classList.remove("active-link")
    }
    el.classList.add("active-link");
  }
});

pagelink.forEach(el => {
  const link = el.getAttribute("href");
  if (locations === link) {
    const active = document.querySelector(".active-link");
    if (active) {
      active.classList.remove("active-link")
    }
    el.classList.add("active-link");
  }
});