$(document).ready(function () {
  const themeToggleBtn = $(".theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    $("html").removeClass("dark light").addClass(currentTheme);

    if (currentTheme === "dark") {
      themeToggleBtn.addClass("theme-toggle--toggled");
    }
  } else {
    $("html").addClass("light");
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
