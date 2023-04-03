$(document).ready(function () {
  // Añadir transición suave al hacer clic en los enlaces del menú
  $("nav a").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    if (target === "#contact") {
      $("html, body").animate(
        {
          scrollTop: $(document).height(),
        },
        1000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - $(window).height() / 2 + 20,
        },
        1000
      );
    }
  });
});
