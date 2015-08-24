$(document).ready(function(){
  $(".show-excerpt").click(function(){
    jQuery(this).siblings(".about-excerpt").slideToggle();
  });
});
