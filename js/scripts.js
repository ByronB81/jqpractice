$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $("img").click(function(){
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
});
