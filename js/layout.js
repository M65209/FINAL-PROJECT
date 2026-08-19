
const currentPath = window.location.pathname;
const isInPagesFolder = currentPath.includes("/pages/");

const rootPath = isInPagesFolder ? "../" : "";

const pagesPath = isInPagesFolder ? "" : "pages/";

const navLinks = [
  { label: "Home", href: rootPath + "index.html" },
  { label: "Menu", href: pagesPath + "menu.html" },
  { label: "Reservations", href: pagesPath + "reservations.html" },
  { label: "Gallery", href: pagesPath + "gallery.html" },
  { label: "Contact", href: pagesPath + "contact.html" },
  { label: "Staff Login", href: pagesPath + "login.html" },
  { label: "Book a Table", href: pagesPath + "reservations.html", isButton: true }
];

// Footer "Explore" links
const footerExploreLinks = [
  { label: "About Us", href: pagesPath + "about.html" },
  { label: "Menu", href: pagesPath + "menu.html" },
  { label: "Gallery", href: pagesPath + "gallery.html" },
  { label: "Reservations", href: pagesPath + "reservations.html" }
];

function isActiveLink(href) {
  // Get just the file name from the href and from the current path
  const linkFile = href.split("/").pop();
  const currentFile = currentPath.split("/").pop() || "index.html";
  return linkFile === currentFile;
}

function createHeader() {
  let navHTML = "";

  navLinks.forEach(function (link) {
    const activeClass = isActiveLink(link.href) ? " active" : "";
    const btnClass = link.isButton ? " btn" : "";
    navHTML +=
      '<a href="' + link.href + '" class="' + btnClass + activeClass + '">' +
      link.label +
      "</a>";
  });

  return (
    '<header class="header">' +
      '<div class="header-inner">' +
        '<a href="' + rootPath + 'index.html" class="logo">Bella Cucina</a>' +
        '<button class="menu-btn" aria-label="Open menu">☰</button>' +
        '<nav class="nav">' +
          navHTML +
        "</nav>" +
      "</div>" +
    "</header>"
  );
}

function createFooter() {
  let exploreHTML = "";
  footerExploreLinks.forEach(function (link) {
    exploreHTML += '<a href="' + link.href + '">' + link.label + "</a>";
  });

  return (
    '<footer class="footer">' +
      '<div class="footer-inner">' +
        '<div class="footer-col">' +
          "<h4>Restaurant Lelebotte</h4>" +
          "<p>Crafting culinary narratives since 2012. Fine dining redefined through precision and passion.</p>" +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Explore</h4>" +
          exploreHTML +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Connect</h4>" +
          '<a href="#">Instagram</a>' +
          '<a href="#">Facebook</a>' +
          '<a href="#">Newsletter</a>' +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Legal</h4>" +
          '<a href="#">Privacy Policy</a>' +
          '<a href="#">Terms of Service</a>' +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "&copy; 2026 Restaurant Lelebotte. All rights reserved." +
      "</div>" +
    "</footer>"
  );
}

function renderLayout() {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) {
    headerEl.innerHTML = createHeader();
  }

  if (footerEl) {
    footerEl.innerHTML = createFooter();
  }
  setupMobileMenu();
}

function setupMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
     
      nav.classList.toggle("show");
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  renderLayout();
});
