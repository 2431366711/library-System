$(function(){
    $('.leftbox .box1child p').click(function(){
       if($(this).siblings().length==0){
        $('.leftbox .secondmenu li').removeClass('active')
        
       }
      
        $(this).siblings().toggleClass('displayed')
       
        console.log( $(this).parent().siblings().children('.secondmenu'))
        $(this).parent().siblings().children('.secondmenu').addClass('displayed')
        $(this).addClass('active')
        $(this).parent().siblings().children('p').removeClass('active')
 
   
      
       
    })
    $('.leftbox .secondmenu li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $(this).parent().parent().siblings().children('.secondmenu').children('li').removeClass('active')
    })
})