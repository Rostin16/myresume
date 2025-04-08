
$(document).ready(function(){
    $('.fa-bars-staggered').click(function(){
        $('aside').toggleClass('w-80');
        $('header').toggleClass('ml-80');
        $('.body-area').toggleClass('ml-80');
        $('.logo_img').toggleClass('d-none');
        $('.fa-bars-staggered').toggleClass('fa-xmark');
        $('.nav-title').toggleClass('d-none');
        $('.fa-angle-right').toggleClass('d-none');
        $('.fa-bars-staggered').AddClass('padding');
      

        

    });

   $('.nav-list').click(function(){
        $(this).next('.dropdown').slideToggle(500);
        $('.dropdown').not($(this).next()).slideUp(500);
   });
   $('.admin-content').click(function(){
    $('.profile').slideToggle(500);
   });
   $('.language').click(function(){
     $('.lang-types').slideToggle(500);
   });
   $('.fa-angle-right').click(function(){
    $(this).toggleClass('fa-chevron-down');
   });
});

// pointer js
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});



