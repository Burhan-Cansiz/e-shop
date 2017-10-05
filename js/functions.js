$(function () {  
    
    $('.menuAc').click(function () {
            $('.acilirMenu').fadeIn('fast');

        });
    
    $('*').click(function (e) {
            if (!$(e.target).is('.depo-menu') && !$(e.target).is('.depo-menu *') && !$(e.target).is('.menuAc')) {
                $('.acilirMenu').fadeOut('fast');
            }

        });
    

    $('.title').on('click',function(){
    $('.akordiyon ul').stop().slideUp();
        $(this).next('ul').stop().slideToggle();
    })
    
   
    
});