// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require jquery.easing
//= require twitter/bootstrap
//= require lightbox
//= require turbolinks
//= require_tree .

$(window).scroll(function(){
  if($('.navbar').offset().top > 50){
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

$(function(){
  $('.page-scroll a').bind('click', function(){
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
