module.exports = function() {

  // begin header background
  $(window).on("scroll", function () {
    bgHeader();
  });

  $(window).on("load", function () {
    bgHeader();
  });

  function bgHeader() {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('is-scroll');
    } else {
      $('.header').removeClass('is-scroll');
    }
  }
  // end header background

};