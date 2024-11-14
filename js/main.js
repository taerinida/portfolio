$(document).ready(function(){
    $('.phone > .text_box').delay(1000).fadeTo(100,1)
    $('.phone > p').delay(6000).fadeTo(1000,1)
})
let content = "Hello, I'm Designer Kim tae rin";
let contentt = ''
let text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 200)
$('.phone p').click(function(){
   $('.phone p').animate({opacity:0}, 400);
   $('.text_box').css('color', '#ffffff');
   $('.phone > .phone_bg').stop().animate({opacity:1},3000,function(){
       $('.phone > img').addClass('img_tr').delay(2500).animate({opacity:0},1000,function(){
           $('.phone > .text_box').animate({opacity:0}, 400,function(){
                $('.phone > p').css('display', 'none')
                $('.fullpage').delay(200).fadeTo(1000,1,function(){
                    $('#visual').css('display', 'none');
                    $('.page_1 > *').stop().animate({opacity:1},2000);
                })
                
                $('header').delay(1000).fadeTo(2000,1)
                $('.scroll').delay(1000).fadeTo(2000,1)
           })
       });
       $('.phone > .phone_bg').addClass('img_tr');
    })
})
$('ul > li:nth-child(1)').on('click', function(){
   window.scrollTo({top: 0, behavior:'smooth'})
   return false;
})
$('ul > li:nth-child(3)').on('click', function(){
   window.scrollTo({top: 953, behavior:'smooth'})
   return false;
})
$('ul > li:nth-child(5)').on('click', function(){
   window.scrollTo({top: 6628, behavior:'smooth'})
   return false;
})
$(window).scroll(function(){
   let current_scroll = $(this).scrollTop();
   console.log(current_scroll);
   if(current_scroll > 1900) {
       $('.p3_fix').stop().animate({left:'20px'},500,'swing');
   } else {
       $('.p3_fix').stop().animate({left:'-120px'},500,'swing');
   }
})
$('.p3_left .nnru ').on('click', function(){
   window.scrollTo({top: 2855, behavior:'smooth'})
   return false;
})
$('.p3_left .pledis').on('click', function(){
   window.scrollTo({top: 3800, behavior:'smooth'})
   return false;
})
$('.p3_left .art').on('click', function(){
   window.scrollTo({top: 4750, behavior:'smooth'})
   return false;
})
$('.p3_left .wiki').on('click', function(){
   window.scrollTo({top: 5700, behavior:'smooth'})
   return false;
})
$('.pro1').on('click', function(){
   window.scrollTo({top: 2855, behavior:'smooth'})
   return false;
})
$('.pro2').on('click', function(){
   window.scrollTo({top: 3800, behavior:'smooth'})
   return false;
})
$('.pro3').on('click', function(){
   window.scrollTo({top: 4750, behavior:'smooth'})
   return false;
})
$('.pro4').on('click', function(){
   window.scrollTo({top: 5700, behavior:'smooth'})
   return false;
})