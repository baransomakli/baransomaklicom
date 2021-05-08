/*
  Author: Basework Studio
  Author URI: https://basework.studio
  Contact: info@basework.studio
*/

$.fn.exists = function (callback) {
  var args = [].slice.call(arguments, 1);

  if (this.length) {
    callback.call(this, args);
  }

  return this;
};

function App() {
  $(window).on('scroll', function () {
    return [ScrollExample(), CheckObjectVisibility(), ImageAnimation()];
  });

  $(window).on('resize', function () {
    return [];
  });

  $(function () {
    // Form()

    return [SocialMediaShare(), Animations()];
  });
}

App();
