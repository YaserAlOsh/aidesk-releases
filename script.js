const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const year = document.querySelector("[data-year]");
const downloadLinks = document.querySelectorAll('a[href*="releases/latest"]');

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const platform = navigator.platform.toLowerCase();
const isLinux = platform.includes("linux");
const isWindows = platform.includes("win");

downloadLinks.forEach((link) => {
  if (!(link instanceof HTMLAnchorElement)) return;
  if (link.textContent?.toLowerCase().includes("download")) {
    if (isWindows) link.setAttribute("aria-label", "Download the latest AIDesk Windows release");
    if (isLinux) link.setAttribute("aria-label", "Download the latest AIDesk Linux release");
  }
});
