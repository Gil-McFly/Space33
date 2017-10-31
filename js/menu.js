$(document).ready(function(){
     $(".menu__toggle__link").click(function(e){
       $(".navbar").toggleClass('show');
       e.preventDefault();
     });
  });
