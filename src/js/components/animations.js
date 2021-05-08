function CheckObjectVisibility() {
  $('.fadeInUp-scroll, .scale-scroll').each(function (i) {
    var objectTop = $(this).offset().top;
    var windowBottom = $(window).scrollTop() + $(window).outerHeight();
    var instance = $(this);
    var delay = instance.data('delay') || 0;

    if (windowBottom > objectTop - 50) {
      window.setTimeout(function () {
        instance.addClass('visible');
      }, delay);
    }
  });
}

function ImageAnimation() {
  $('.image-animation').each(function (i) {
    var objectTop = $(this).offset().top;
    var windowBottom = $(window).scrollTop() + $(window).outerHeight();
    var instance = $(this);
    var delay = instance.data('delay') || 0;

    if (windowBottom > objectTop - 100) {
      window.setTimeout(function () {
        instance.addClass('animate');
      }, delay);
    } else {
      $(this).removeClass('animate');
    }
  });
}

function Animations() {
  return [CheckObjectVisibility(), ImageAnimation()];
}
