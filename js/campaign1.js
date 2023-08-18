$(document).ready(function () {
  $(".up-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".down").offset().top,
      },
      1000
    );
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".sub-box1-txt").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".cam-grid9").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".up-con4").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});
