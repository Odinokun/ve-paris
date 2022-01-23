module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  $('.fadeInLeft').waypoint(function () {
    $(this).addClass("animate__fadeInLeft");
  }, {offset: "90%"});
  $('.fadeInRight').waypoint(function () {
    $(this).addClass("animate__fadeInRight");
  }, {offset: "90%"});
  $('.fadeInUp').waypoint(function () {
    $(this).addClass("animate__fadeInUp");
  }, {offset: "100%"});

  // end Animate CSS + WayPoints javaScript Plugin

};