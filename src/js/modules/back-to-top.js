module.exports = function () {

  // begin to-top
  var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#back2top').fadeIn();
      else $('#back2top').fadeOut();
    });

    $('#back2top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
  // end to-top

};