/* Pixel Engineering Co -- Custom js -- Handcrafted Code -- */

$('#mblmenu').click(function() {
  $('.mblnav').slideToggle();
});

// smooth scroll function for hash links 
/*$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});*/

//nav-to-top arrow function
$(document).ready(function() {
var offset = 250;
var duration = 300;
$(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
  jQuery('.back-to-top').fadeIn(duration); 
  } else {
    jQuery('.back-to-top').fadeOut(duration);
  }
});
&nbsp;
$(‘.back-to-top’).click(function(event) {
  event.preventDefault();
  $(‘html, body’).animate({scrollTop: 0}, duration);
  return false;
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
})
 
});