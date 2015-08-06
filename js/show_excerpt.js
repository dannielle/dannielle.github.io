$(document).ready(function(){
  $(".show-excerpt").click(function(){
    jQuery(this).siblings(".post-excerpt").slideToggle();
  });
});
