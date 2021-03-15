
$(document).ready(function(){
    
    let a = true ;
    $('.bars').on('click',function(){
            if(a) {
                $('.menu-items').css('right','0') ;
                a = false;
            }
            else{
                $('.menu-items').css('right','-80%') ;
                a = true;
            }
    });
      //hide loader
      $(window).on("load", function () {
        $(".loader-container").fadeOut("slow");
      });
});
