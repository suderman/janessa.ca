$(function() {

  var panelHeights = function() {
    var maxHeight = 0;
    $('.panel')
      .css('minHeight', 0)
      .each(function() { maxHeight = Math.max(maxHeight, $(this).height()); })
      .css('minHeight', maxHeight);
  }
  $(window).on('load', panelHeights);
  $(window).on('resize', panelHeights);
  setTimeout(panelHeights, 3000);

  $('button.hamburger').click(function(e) {
    e.stopPropagation();
    $('body').toggleClass('hamburger');
  });

});
