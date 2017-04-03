$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("img").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
