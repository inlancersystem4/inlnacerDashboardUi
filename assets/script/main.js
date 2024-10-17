$(document).ready(function () {
  const themeToggleCheckbox = $("#theme-toggle-checkbox");
  const currentTheme = localStorage.getItem("theme");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme)) {
    $("html").addClass("dark");
    themeToggleCheckbox.prop("checked", true);
  } else {
    $("html").removeClass("dark");
    themeToggleCheckbox.prop("checked", false);
  }

  themeToggleCheckbox.on("change", function () {
    if ($(this).is(":checked")) {
      $("html").addClass("dark").removeClass("light");
      localStorage.setItem("theme", "dark");
    } else {
      $("html").removeClass("dark").addClass("light");
      localStorage.setItem("theme", "light");
    }
  });

  var $sidebar = $(".layout-sidebar");
  const sidebarState = localStorage.getItem("sidebarState");

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
