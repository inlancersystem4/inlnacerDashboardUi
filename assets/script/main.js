$(document).ready(function () {
  const themeToggleBtn = $(".theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    $("html").attr("data-theme", currentTheme);

    if (currentTheme === "dark") {
      themeToggleBtn.addClass("theme-toggle--toggled");
    }
  }

  themeToggleBtn.on("click", function () {
    const theme = $("html").attr("data-theme") === "dark" ? "light" : "dark";

    $("html").attr("data-theme", theme);

    localStorage.setItem("theme", theme);

    themeToggleBtn.toggleClass("theme-toggle--toggled");
  });
});
