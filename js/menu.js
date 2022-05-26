//nav
$(function () {
  $(".menu1").cbSlideDownHeader({
    zIndex: 1,
    //headerClone: true,
    //fullscreenView: true
  });
  $(".menu0").cbSlideUpHeader({
    zIndex: 0,
    //headerClone: true,
    //fullscreenView: true
    //slideDownCallback: function () {alert("aaa");}
  });
});
