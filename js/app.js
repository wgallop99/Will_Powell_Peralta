$(document).ready(function(){
  $(document).foundation();

  $('.single-item').slick({
    dots:true,
    pauseOnHover:true,
    autoplay:true,
    fade:true,
    arrows:false,
    autoplaySpeed:5000
  });


  $('.top_nav li a').on('hover', function () {
    $(this).children('i').toggleClass('fa-spin');
    $(this).toggleClass('hover');
  });

  $('.posts').on('hover', function () {
    $('.blog_tick').toggleClass('dunzo');
  });

  $('#skateboarders').on('hover', function () {
    $('.boarder_tick').toggleClass('dunzo');
  });

  $('#skateboards').on('hover', function () {
    $('.board_tick').toggleClass('dunzo');
  });
});
