$(document).ready(function () {
  // Añadir transición suave al hacer clic en los enlaces del menú
  $("nav a").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });
});
