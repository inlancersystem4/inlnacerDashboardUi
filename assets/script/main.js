$(document).ready(function () {
  const themeToggleBtn = $(".theme-toggle");
  const currentTheme = localStorage.getItem("theme");

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
