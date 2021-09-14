$(document).ready(function(){
    
    
    // show navbar when click on icon 
    
    $("i.icon").click(function(){
        
        $('.nav-list').slideToggle(); 
        
    }); 
    
    
    
    // when scroll body (sticky navbar)
    
    $(window).scroll(function(){
        
        var sc = $(this).scrollTop(); 
        
        if(sc > 100) {
            
            //console.log("window max scroll 100");
            
            $('header').addClass("sticky"); 
        }else{
            
            $('header').removeClass("sticky");
        }
        
        
        
        
         // countTo plugin 
    
        // console.log($('.stat').offset().top); // al msfa mn 2ola fo2 l7da bdyta al sections = 1790
        
        if(sc > 1790){
            
             $('.timer').countTo();
             $(window).off('scroll'); /* no2fa al scroll b3da mi5lsa al timer */ 
        }
        
        
        
        
        
        // scrolltop 
        
        
        if ( sc > 500 ){
            
            $('.scrollTop').fadeIn(); 
        }else {
            
             $('.scrollTop').fadeOut(); 
        }
        
        
    }); 
    
    
    // portfolio btn change color 
    
    $('.buttons button').click(function(){
        
        $(this).addClass('active-btn').siblings().removeClass('active-btn'); 
        
        var cssfilter = $(this).attr('id'); // lma ad5ta 3la al btn hygba al id or class
        //console.log(cssfilter); // id al btn 
        
        if (cssfilter === 'all'){
            
            $('.images > div').fadeIn(); 
        }else {
            
            $('.images > div').fadeOut(); 
            
            $('.images').contents().filter('.' + cssfilter).fadeIn(); 
        }
        
    }); 
    
    
    
    
    // owl carousel 
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,   
    nav:false,   //true -> pre-next    false-> no pre-next // dots:false -> no dots 
    responsive:{
        0:{
            items:1 // screen smail 
        },
        600:{
            items:3 // screen mad
        },
        1000:{
            items:4 // screen large
        }
    }
}); 
    
   
    
    
  // choose panel 
    
    $('.c-panel li').click(function(){
        
        
        $(this).addClass('active-btn').siblings().removeClass('active-btn'); 
        
        var p = $(this).data('role'); 
        
        //console.log(p); // ntb3a al data bt3ta kol li 
        
        $('.content > div').hide(); 
        $('.content').contents().filter('#' + p).fadeIn(); 
        
    }); 
    
    
    
    // popup video in choose section 
    
    
   $('.pop').magnificPopup({
       
       type: 'iframe'
       
   }); 
    
    
    
    
  // slick slider 
    
    $('.slick').slick({
        
        nextArrow : false, 
        prevArrow : false,
        
    }); 
    
    
    
    
  // scroll to top 
    
   $('.scrollTop').click(function(){
       
       $('body , html').animate({
           
           scrollTop : 0
           
       },500); 
       
   }); 
    
    
    
 // smooth scroll
    
    $('.list a').click(function(){
        
        $('body , html').animate({
            
            scrollTop : $($(this).attr('href')).offset().top - 80
            
        }); 
        
    }); 
    
    
    
    
}); 