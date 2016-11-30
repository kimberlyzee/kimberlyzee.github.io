$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
$("#sidebar-button").click(function(){

console.log("hello?");

if ($("#sidebar-button").hasClass("button-active")){
  
  console.log("fml");

  $('body').removeClass("no-scroll");
  $("#sidebar-button").removeClass("button-active");
  $(".sidebar-container").removeClass("sidebar-active");
  $(".page-wrapper").removeClass("wrapper-active");
  }

else {
   
    console.log("what");

  $("#main").fadeOut(1000);
  $(".img-login-icon").fadeIn(1000);
  $("#login").css("opacity", "1");
  $("#login").fadeIn(1000);
  $("#sidebar-button").addClass("button-active");
  setTimeout(function() {
  $('body').addClass('no-scroll');
    }, 300);

}


})


  // QUESTION 7

$(".img-login-icon").click(function(){
  console.log("check-check");

if ($("#sidebar-button").hasClass("button-active")){
  
  console.log("ugh");

  $('body').removeClass("no-scroll");
  $("#main").fadeIn(1000);
  $(".img-login-icon").fadeOut(1000);
  $("#login").fadeOut(1000);
/**
  $("#sidebar-button").removeClass("button-active");
  $(".sidebar-container").removeClass("sidebar-active");
  $(".page-wrapper").removeClass("wrapper-active");
  **/
  }

else {
   
    console.log("haha");

}

})

$(".learn-button").hover(function(){
$(this).css("background-color", "#8A8A8A");
    }, function(){
    $(this).css("background-color", "white");
});

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  // QUESTION 8


  //Implement the "slide to left" when the user clicks on #carousel-next here

  $("#carousel-next").click(function(){

    var location = parseInt($('#carousel').css("margin-left").replace("px", ""));

  if(location == -3840) {
    return false;
      }
  else {
     $("#carousel").css("margin-left", (location - 960) + "px");

      }

  })

  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $("#carousel-prev").click(function(){

    var marginright = parseInt($('#carousel').css('margin-left').replace("px", ""));

if (marginright == 0) {

  return false;
}
else{
  $("#carousel").css("margin-left", (marginright + 960) + "px");
}
  })



  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});