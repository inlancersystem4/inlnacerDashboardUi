$(document).ready(function () {
  const themeToggleBtn = $(".theme-toggle");
  const currentTheme = localStorage.getItem("theme");
  const sidebarState = localStorage.getItem("sidebarState");

  if (currentTheme) {
    $("html").removeClass("dark light").addClass(currentTheme);

    if (currentTheme === "dark") {
      themeToggleBtn.addClass("theme-toggle--toggled");
    }
  } else {
    $("html").addClass("dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.addClass("theme-toggle--toggled");
  }

  themeToggleBtn.on("click", function () {
    const isDarkTheme = $("html").hasClass("dark");

    if (isDarkTheme) {
      $("html").removeClass("dark").addClass("light");
      localStorage.setItem("theme", "light");
    } else {
      $("html").removeClass("light").addClass("dark");
      localStorage.setItem("theme", "dark");
    }

    themeToggleBtn.toggleClass("theme-toggle--toggled");
  });

  var $sidebar = $(".layout-sidebar");
  if (sidebarState) {
    $sidebar.removeClass("main mini").addClass(sidebarState);
  }

  $("#sidebarToggleBtn").click(function () {
    if ($sidebar.hasClass("mini")) {
      $sidebar.removeClass("mini").addClass("main");
      localStorage.setItem("sidebarState", "main");
    } else if ($sidebar.hasClass("main")) {
      $sidebar.removeClass("main").addClass("mini");
      localStorage.setItem("sidebarState", "mini");
    }
  });
});

function handleDropDown(dropdownId) {
  $(".dropdown-parent").removeClass("active");
  $("#" + dropdownId).toggleClass("active");
}

$(document).on("click", function (e) {
  if (
    !$(e.target).closest(".dropdown-parent").length &&
    !$(e.target).hasClass("dropdown-link")
  ) {
    $(".dropdown-parent").removeClass("active");
  }
});

function handleDrawer(DrawerId) {
  $("#" + DrawerId).addClass("drawer-show");
}

function closeDrawer(DrawerId) {
  $("#" + DrawerId).removeClass("drawer-show");
}

function toggleSideBar() {
  $(".layout-sidebar").removeClass("mini");
  $(".layout-sidebar").addClass("main !left-0 z-[9999]");
}

function closeSideBar() {
  $(".layout-sidebar").removeClass("mini");
  $(".layout-sidebar").removeClass("main !left-0 z-[9999]");
}

$(document).ready(function () {
  $(".sidebar-link").on("click", function (e) {
    e.preventDefault();
    var subLinks = $(this).next(".sub-links");
    if (subLinks.length) {
      subLinks.slideToggle();
      $(this).toggleClass("active");
    }
  });
});
