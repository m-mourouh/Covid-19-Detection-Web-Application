
const fileInput = document.querySelector('input[type="file"]') ;
const image = document.querySelector('#chest-image') ; 

fileInput.addEventListener('change',function(e){
    let file = this.files[0] 
    const reader = new FileReader() 
    reader.addEventListener('load',function(){
        let dataURL = reader.result 
        image.setAttribute('src',dataURL)
    })
    reader.readAsDataURL(file) 
}) 

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
