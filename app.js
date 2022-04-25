$(function(){
    /* header*/
let header = $("#header");
let main = $("#main");

let mainH =main.innerHeight();
let scrollPos = $(window).scrollTop();
let nav = $("#nav");
let navButton = $("#navButton");
checkScroll(scrollPos, mainH);

$(window).on("scroll resize", function(){
    mainH =main.innerHeight();
scrollPos=$(this).scrollTop();
checkScroll(scrollPos, mainH);
});

function checkScroll(scrollPos, mainH ){
    if(scrollPos>mainH){
        header.addClass("fixed");
        }
        else 
        {
            header.removeClass("fixed");
        }
}
 /* scroll*/
$("[data-scroll]").on("click", function(event){
event.preventDefault();
let blockID = $(this).data('scroll');
let blockOffset = $(blockID).offset().top;
nav.removeClass("show");
$("html, body").animate({
    scrollTop: blockOffset-50
}, 700);
});
/* slider*/
let s = $("#slider");
s.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    arrows: false
  });

  
  navButton.on("click", function(event){
event. preventDefault();
nav.toggleClass("show");



  });

});