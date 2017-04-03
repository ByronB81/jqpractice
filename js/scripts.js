$(document).ready(function(){
  $("p").click(function(){
    $("img").show();
    $("p").hide();
  });

  $("img").click(function(){
    $("p").show();
    $("img").hide();
  });

  $("h1").click(function(){
    location.reload();
  });
});
