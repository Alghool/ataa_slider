/**
 * Ataa Slider.
 * by NetMechanics
 * Eng\ Mahmoud Alghool
 * www.netmechanics.net
 * info@netmechanics.net
 */

$.fn.ataaSlider = function(options){
  options = $.extend({}, $.fn.ataaSlider.defaults, options);
  ataaSlider = $(this);
  ataaSlider.addClass('hi there');
}

$.fn.ataaSlider.defaults =
{
  shownames: true,

}