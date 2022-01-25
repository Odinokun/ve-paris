module.exports = function () {

  // begin scroll 2 ancore desktop menu
  $(function () {
    $('.scroll[href*=\\#]').on("click", function (e) {
      e.preventDefault();
      $('.header').removeClass('is-active');
      document.getElementById('burger__input').checked = false;
      let anchor = $(this);
      if ($(window).width() >= 768) {
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
        }, 1000);
      } else {
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 50 + 'px'
        }, 1000);
      }
    });
    return false;
  });
  // end scroll 2 ancore desktop menu

};