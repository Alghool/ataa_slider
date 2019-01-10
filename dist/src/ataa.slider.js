/**
 * Ataa Slider.
 * by NetMechanics
 * Eng\ Mahmoud Alghool
 * www.netmechanics.net
 * info@netmechanics.net
 */

imgsArr = [];
structure = '<div id="slider-holder">' +
              '<a id="moveRight"></a>' +
              '<a id="moveLeft"></a>' +
              '<div id="images-holder">' +
                '<div class="slide first-image"></div>' +
                '<div class="slide left-image"></div>' +
                '<div class="slide main-image active"></div>' +
                '<div class="slide right-image"></div>' +
                '<div class="slide last-image"></div>' +
              '</div>' +
              '<div id="control-holder">' +
                '<div class="left-holder"><i class="first left glyphicon glyphicon-menu-left"></i><i class="second left glyphicon glyphicon-menu-left"></i></div>' +
                '<div class="main-holder"><p style="display: none"></p></div>' +
                '<div class="right-holder"><i class="first right glyphicon glyphicon-menu-right"></i><i class="second right glyphicon glyphicon-menu-right"></i></div>' +
              '</div>' +
            '</div>';
imgStructure = '<div class="img-holder"><img src="" data-key=""></div>';
options = {};

$.fn.ataaSlider = function(userOptions){
  options = $.extend({}, $.fn.ataaSlider.defaults, userOptions);
  ataaSlider = $(this);
  initialize(ataaSlider);
  $('#moveRight').on('click',moveRight);
  $('#moveLeft').on('click',moveLeft);
};

$.fn.ataaSlider.defaults =
{
  shownames: true,
  height: '400',
  controlheight: '100',
  speed:500
};

function initialize(slider){
  var imgs = slider.find('img');

  //set images counters
  if(imgs.length < 1){
    console.log("ERROR: no images in slider");
    return false;
  }else if(imgs.length == 1){
    slider.append(imgs.clone());
    slider.append(imgs.clone());
    slider.append(imgs.clone());
    slider.append(imgs.clone());
    slider.append(imgs.clone());
  }else if(imgs.length == 2){
    slider.append(imgs.clone());
    slider.append(imgs[0].clone());
  }else if(imgs.length < 5){
    slider.append(imgs.clone());
  }

  //get images info into array
  slider.find('img').each(function(index){
    var thisImage = $(this);
    imgsArr.push({
      key:index,
      src:thisImage.attr('src'),
      name:thisImage.data('name'),
      desc:thisImage.data('desc'),
      active: false
    });
  });
  imgs.remove();

  //get positions
  sliderWidth = slider.width();
  width60 = sliderWidth * (60/100);
  width20 = sliderWidth * (20/100);
  leftPosition = (-1) * (width60 -(width20 - 10));
  firstPosition = leftPosition - (width60 + 10);
  mainPosition = width20;
  rightPosition = width20 + width60 + 10;
  lastPosition = rightPosition + width60 + 10;

  slider.html(structure);
  $('#images-holder').css('height', options.height);
  $('#control-holder').css('height', options.controlheight);

  addImage($('#images-holder .first-image'), imgsArr[0]);
  addImage($('#images-holder .left-image'), imgsArr[1]);
  addImage($('#images-holder .main-image'), imgsArr[2]);
  addImage($('#images-holder .right-image'), imgsArr[3]);
  addImage($('#images-holder .last-image'), imgsArr[4]);
  imgsArr[2].active = true;
  $('.main-holder p').text(imgsArr[2].desc);
  $('.main-holder p').fadeIn();

  $('.first-image').css('left', firstPosition);
  $('.left-image').css('left', leftPosition);
  $('.main-image').css('left', mainPosition);
  $('.right-image').css('left', rightPosition);
  $('.last-image').css('left', lastPosition);

  startArrowAnimations();
}

function moveLeft(){
  var key = $('.active img').data('key');
  imgsArr[key].active = false;
  $('.main-holder p').fadeOut();

  var first = $('.first-image');
  var left = $('.left-image');
  var main = $('.main-image');
  var right = $('.right-image');
  var last = $('.last-image');

  first.animate({
    left: leftPosition
    },options.speed);
  left.animate({
    left: mainPosition,
    'padding-top':'0px',
  },options.speed,function(){
    left.addClass('active');
    var newKey = left.find('img').data('key');
    imgsArr[newKey].active = true;
    $('.main-holder p').text(imgsArr[newKey].desc);
    $('.main-holder p').fadeIn();
    var tempImg = imgsArr.pop();
    imgsArr.unshift(tempImg);
    addImage(last, tempImg);
  });
  main.animate({
    'padding-top':'50px',
    left: rightPosition
  },options.speed ,function(){
    main.removeClass('active');
  });
  right.animate({
    left: lastPosition
  },options.speed);
  last.css('left',firstPosition);

  first.addClass('left-image');
  left.addClass('main-image');
  main.addClass('right-image');
  right.addClass('last-image');
  last.addClass('first-image');

  first.removeClass('first-image');
  left.removeClass('left-image');
  main.removeClass('main-image');
  right.removeClass('right-image');
  last.removeClass('last-image');


}

function moveRight(){
  var key = $('.active img').data('key');
  console.log(key);
  imgsArr[key].active = false;
  $('.main-holder p').fadeOut();

  var first = $('.first-image');
  var left = $('.left-image');
  var main = $('.main-image');
  var right = $('.right-image');
  var last = $('.last-image');



  last.animate({
    left:rightPosition
  },options.speed);
  right.animate({
    left: mainPosition,
    'padding-top':'0px',
  },options.speed,function(){
    right.addClass('active');
    var newKey = right.find('img').data('key');
    imgsArr[newKey].active = true;
    $('.main-holder p').text(imgsArr[newKey].desc);
    $('.main-holder p').fadeIn();
    var tempImg = imgsArr.shift();
    imgsArr.push(tempImg);
    addImage(first, tempImg);
  });

  main.animate({
    'padding-top':'50px',
    left: leftPosition
  },options.speed ,function(){
    main.removeClass('active');
  });


  left.animate({
    left: firstPosition,
  },options.speed);
  first.css('left', 'lastPosition');

  first.addClass('last-image');
  left.addClass('first-image');
  main.addClass('left-image');
  right.addClass('main-image');
  last.addClass('right-image');

  first.removeClass('first-image');
  left.removeClass('left-image');
  main.removeClass('main-image');
  right.removeClass('right-image');
  last.removeClass('last-image');


}

function addImage(holder, img){
  var imgHTML = $(imgStructure);
  imgHTML.find('img').attr('src', img['src']);
  imgHTML.find('img').attr('data-key', img['key']);
  holder.html(imgHTML);
}

function startArrowAnimations(){
  var AnimationSpeed = options.speed * 3;
  $('.first.right').animate({
    left: '50%',
    opacity: 1
  },AnimationSpeed,function(){
    $('.first.right').css({left: '0', opacity:0})
  });
  $('.second.right').animate({
    left: '100%',
    opacity: 0
  },AnimationSpeed,function(){
    $('.second.right').css({left: '50%', opacity:1})
  });
  $('.first.left').animate({
    right: '50%',
    opacity: 1
  },AnimationSpeed,function(){
    $('.first.left').css({right: '0', opacity:0})
  });
  $('.second.left').animate({
    right: '100%',
    opacity: 0
  },AnimationSpeed,function(){
    $('.second.left').css({right: '50%', opacity:1});
    startArrowAnimations();
  });

}