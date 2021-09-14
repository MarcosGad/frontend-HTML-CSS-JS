/*global console, $ */

$(function () {
    
    'use strict'
    
    
    
    
    //padding top body =   css(padding-top=height(navbar height))
    
    $('body').css('paddingTop', $('.navbar').innerHeight()); 
    
    //$('body').css('paddingTop', $('.navbar').innerHeight() + 11); 
    
    
    // footer -> paddingBottom
    
    
    
    
    
    
  // smoothly scroll to element 
    
    $('.navbar li a').click(function(e){
        
        e.preventDefault(); // 3ashn amn3a wzfta al a (3ashn lo f 7ga load tat3ml mn gdeda f al page)
        
      //console.log($(this).data('scroll')); 
        
      //console.log('#' + $(this).data('scroll'));
        
      $('html , body').animate({
          
       scrollTop: $('#' + $(this).data('scroll')).offset().top + 1 
          // 1px 3ashn y72a2 al shert sync > w yot5la 3la sections w myw2fsh 3la al baba 
          
          
      },1000); 
        
    }); 
    
    
    
    // add active class on navbar anb remove class from siblings
    
    
    
    
   /* $('.navbar li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active'); 
        
  });   // hna lo d5ta 3la al li */ 
    
    
    
    

    
    $('.navbar li a').click(function () {
        
       $(this).addClass('active').parent().siblings().find('a').removeClass('active'); 
        
        
       /* $('.navbar a').removeClass('active'); 
        
        $(this).addClass('active'); */ // tr2a tanya 
        
  });   // hna lo d5ta 3la al a  
    
    
    
    
    
       
    
    $(window).scroll(function(){
        
        
        
        
        //sync navbar links with sections
        
        $('.block').each(function(){
            
            if ($(window).scrollTop() > $(this).offset().top){   //offset().top  = 5ta al fo2 f al 3onsora 
                
               // console.log($(this).attr('id')); // 3ashn at2kd any bwsal lla 3onsora bla scroll 
                
                var blockID = $(this).attr('id'); 
                
                $('.navbar a').removeClass('active'); // 3ashn lma ylona wa7da ya shela al lona mn al tanya
                
                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active'); 
                
            }
            
            
        }); 
        
        
        
        // scroll to top button 
        
        
        var scrollToTop = $('.scroll-to-top'); 
        
        if ($(window).scrollTop() > 1000 ) {
            
            
            if (scrollToTop.is(':hidden')){ // cheak aza kan al 3onsra hidden am l2 
                
                scrollToTop.fadeIn(400); 
                
            }
            
        //console.log('hello you passed 1000px now'); 
            
        //$('.scroll-to-top').fadeIn(400); 
            
        }else{
            
            
            scrollToTop.fadeOut(400);
            
        //$('.scroll-to-top').fadeOut(400);
            
        }
        
        
        
    }); // end window 
    
  
    
    
    // click on scroll to top to go up 
    
    
   $('.scroll-to-top').click(function (event) {
       
       event.preventDefault(); // 3ashn amn3a wzfta al a 
        
        
      $('html , body').animate({
          
       scrollTop: 0 // tl3na l25ra 7ta fa al sf7a 
          
          
          
      },1000); 
       
       
       
   }); 
    
    
     // one popup 
    
   /* $('.show-popup').click(function(){
        
        $('.popup').fadeIn(); 
        
    }); 
    
     $('.popup').click(function(){
        
        $(this).fadeOut(); // ya3wda 3la al popup aly fo2 
        
    }); 
    
    
     $('.popup .inner').click(function(e){
        
        e.stopPropagation(); // amn3a antshar al click 
         
        //$(this).fadeOut(); 
        
    }); 
    
    
    $('.popup .close').click(function(e){
        
        e.preventDefault(); // amn3a al ftrdya 3ashn lo gwo form 
        
        $('.popup').fadeOut();
        
        
    }); */
    
    
    // tow popup 
    
    $('.show-popup').click(function(){
        
        $($(this).data('popup')).fadeIn(); 
        
    }); 
    
     $('.popup').click(function(){
        
        $(this).fadeOut(); // ya3wda 3la al popup aly fo2 
        
    }); 
    
    
     $('.popup .inner').click(function(e){
        
        e.stopPropagation(); // amn3a antshar al click 
         
        //$(this).fadeOut(); 
        
    }); 
    
    
    $('.popup .close').click(function(e){
        
        e.preventDefault(); // amn3a al ftrdya 3ashn lo gwo form 
        
        $(this).parentsUntil('.popup').parent().fadeOut(); // 3ashn kol close e9lka al 5as byha fkta 
        
        
    });
    
    
    $(document).keydown(function (e) {
        
        if(e.keyCode == 27) { // 27 = esc 
            
            
            $('.popup').fadeOut();
            
        }
        
    }); 
    
    
    
    // buttons with effects  
    
    $('.from-left').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            width:'100%'
            
        }, 500); 
        
        
    }, function () {
        
         $(this).find('span').eq(0).animate({
            
            width: 0
            
        }, 500); 
        
        
        
    }); 
    
    
    
    
    
    
        $('.from-top').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            height:'100%'
            
        }, 500); 
        
        
    }, function () {
        
         $(this).find('span').eq(0).animate({
            
            height: 0
            
        }, 500); 
        
        
        
    }); 
    
    
    
    
     
    $('.border-left').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            width:'100%'
            
        }, 500); 
        
        
    }, function () {
        
         $(this).find('span').eq(0).animate({
            
            width: 0
            
        }, 500); 
        
        
        
    }); 
    
    
    
    $('.border-top').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            height:'100%'
            
        }, 500); 
        
        
    }, function () {
        
         $(this).find('span').eq(0).animate({
            
            height: 0
            
        }, 500); 
        
        
        
    }); 
    
    
    // fun buttons with effects is dont span 
    
    /*$('.buttons-effects button').each(function () {
        
        $(this).prepend('<span></span>'); // sofa yad3a span f al 2ola 
        
    }); */ 
    
    
    
    // bounce button effects 
    
    function bounceElement(selector, times , distance , speed) {
        
            for ( var i = 0; i < times; i= i+1 ) {
                
                          $(selector).animate({

                            top: '-=' + distance

                            }, speed).animate({

                             top: '+=' + distance

                           }, speed);
                
      }
        
    }
    
$('.bounce').on('click' , function () {
        
        bounceElement($(this), 3 , 20 , 400); 
        
    }); 
    
    /*$('.bounce').on('click' , function () {
        
        $(this).animate({
            
            marginTop: '-=20px' // = 3ashn myl9ash margin al 3onosra 
            
        }, 400).animate({
            
            marginTop: '+=20px'
            
        }, 400);
        
    }); */
    
    
    
    // Animated progress 
    
    $('.animated-progress span').each(function(){ // each lkla wa7d fyhom 
        
        $(this).animate({
            
            width : $(this).attr('data-progress') + '%'
            
        },2000, function(){
            
            $(this).text($(this).attr('data-progress') + '%'); 
            
        }); 
        
        
    }); 
    
    
    
    // fixed menu 
    
    $('.fixed-menu .fa-gear').on('click', function () {
        
        $(this).parent('.fixed-menu').toggleClass('is-visible'); 
        
        if($(this).parent('.fixed-menu').hasClass('is-visible')) {
            
            $(this).parent('.fixed-menu').animate({
                
                left: 0 /* yazhra al menu */ 
                
            }, 1000); 
            
            // fo2 al body 
            
             $('body').animate({
                
                paddingLeft : '220px' /* px nfsa width al 3onsra */ 
                
            }, 1000); 
            
            
        }else {
            
             $(this).parent('.fixed-menu').animate({
                
                left: '-220px' /* y5fa al menu */ 
                
            }, 1000); 
            
            
             // fo2 al body 
            
             $('body').animate({
                
                paddingLeft : 0
                
            }, 1000); 
            
        }
        
        
        
    }); 
    
    
    
    // change colors 
    
    $('.change-colors li').on('click' , function(){
        
        
        $('body').attr('data-choose-color', $(this).data('color')); 
        
    }); 
    
    
    
    
    // gallery 
    
    var numberOfthumbnails = $('.thumbnails').children().length,    // console.log(numberOfthumbnails); 
        marginBetweenthumbnails = '.5', 
        totalMarginBetweenthumbnails = (numberOfthumbnails - 1) * marginBetweenthumbnails, //console.log(totalMarginBetweenthumbnails); 
        thumbnailsWidth = (100 - totalMarginBetweenthumbnails) / numberOfthumbnails; // console.log(thumbnailsWidth);
    
        $('.thumbnails img').css({
            
            'width': thumbnailsWidth + '%', // % 3ashn me3tbrosh px 
            'margin-right' : marginBetweenthumbnails + '%',
        })
    
      
   
    
    $('.thumbnails img').on('click', function () {
        
        $(this).addClass('selected').siblings().removeClass('selected'); 
        
        //console.log($(this).attr('src')); 
        
        //$('.master-img img').attr('src' , $(this).attr('src') ); // alfkra al sasia 
        
        $('.master-img img').hide().attr('src' , $(this).attr('src')).fadeIn(500);
    }); 
    
    
    
    $('.master-img .fa-chevron-right').on('click', function (){
        
        if ($('.thumbnails .selected').is(':last-child')) {
            
                $('.thumbnails img').eq(0).click();    
            } else {
                
                $('.thumbnails .selected').next().click(); 
                
            }
        
        
        
    }); 
    
    
     $('.master-img .fa-chevron-left').on('click', function (){
        
         
          if ($('.thumbnails .selected').is(':first-child')) {
            
                $('.thumbnails img:last').click();    
              
            } else {
                
                $('.thumbnails .selected').prev().click(); 
                
            }
    }); 
    
    
    
    
    // toggle product descripthion 
    
    
    $('.products .product i, .items .item i').on('click', function () {
        
        $(this).toggleClass('fa-plus fa-minus'); // t7ola mn + al - 
        
        $(this).next('p').slideToggle(); 
        
    }); 
    
    
    
    // switch list and grid view 
    
    $('.view-options i').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active'); 
        
        $('.items').removeClass('list-view grid-view').addClass($(this).data('class')); 
        
       //console.log($(this).data('class')); 
        
    }); 
    
    
    // error message effect 
    
    $('.error-message').each(function () { // 2ola mr7la al masg htatl3a mn al gnba 
        
        $(this).animate({
            
            right : 0
            
        }, 1000, function () {
            
            $(this).delay(3000).fadeOut(); 
            
        }); 
        
        
    }); 
    
    
    // our form 
    
    // hide placeholder on focus and blur 
    
    var placeAttr = ''; 
    
    $('[placeholder]').focus(function () {
        
        placeAttr = $(this).attr('placeholder'); // h5zna al placeholder fa al mot9er placeAttr
        
        $(this).attr('placeholder', ''); // hide placeholder 
        
    }).blur(function () {
        
         $(this).attr('placeholder', placeAttr); // hgyba al mt5zna w azhro  
        
    }); 
    
    
    // show message when field is empty
    
    $('[required]').blur(function(){
        
        //console.log('good'); // lo al field required
        
        if($(this).val() == '') { // lo al val fdya tl3a al ..
            
            $(this).next('span').fadeIn().delay(2000).fadeOut(); 
        }
        
    }); 
    
    
    
   // add asterisk to all required field 
    
    $('<span class="asterisk">*<span>').insertBefore(':input[required]'); 
    
  // customize the asterisk with jq 
    
    $('.asterisk').parent('div').css('position','relative'); 
    
    $('.asterisk').each(function () {
        
        
    $(this).css({
        
        'position' : 'absolute',
        'top' : 13 , 
        'left' : $(this).parent('div').find(':input').innerWidth() - 15, // -15px
        'color' : '#f00',
        'font-weight' : 'bold'
    }); 
        
//console.log($(this).parent('div').find(':input').innerWidth()); // size al input shaml al padding ...
        
    }); 
    
   
    
    
    // customize the input file 
    
    $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>'); // d3a al input da5la div class = custom-file
    
    $('.custom-file').prepend('<span>Upload Your Files</span>');
    
    $('.custom-file').append('<i class="fa fa-upload fa-lg skin-color"></i>');
    
    $('.our-form input[type="file"]').change(function () { // chanfe = option lma a7ota fa file mn al pc 
        
        //console.log($(this).val()); // ay file hykon f al upload ashofo 
        
        $(this).prev('span').text($(this).val()); 
        
    }); 
    
    
    
    
    // detect unicode of keyboards keys 
    
    $('.detect-unicode').on('keyup', function(event) { 
    
        var keyboardKey = event.keyCode || event.which; 
        
        $('.unicode').text(keyboardKey); // kol mktab fa al input ydla kimta al unicode
    
    }); 
    
    
    // change input direction depend on the langauge
    
    $('.auto-direction').on('keyup' , function (){
        
    //console.log($(this).val().charCodeAt(0)); // hna lma aktba fa input hygba fa al console al ASCII (amircn astndra code)
        
        if($(this).val().charCodeAt(0) < 200 ){ // < 200 = english 
            
            $(this).css('direction' , 'ltr'); 
            
        } else {
            
            $(this).css('direction' , 'rtl'); 
        }
        
    }); 
    
    var english = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        
        text = ''; 
    
        for(var i=0; i< english.length; i=i+1) {
            
            text += english.charCodeAt(i) + '<br>'; 
        }
    
       //$('.english').html(text); 
    
    
    
    
    
    // convert input value to togs  
    
    $('.add-tag').on('keyup', function(event) { 
    
        var keyboardKey = event.keyCode || event.which; 
        
       // console.log(keyboardKey); // a3rfa al unicode , 
        
        if(keyboardKey == 188) {// you pressed comma now 
            
            var thisValue = $(this).val().slice(0 , -1); //  slice = gbla 2ola 7arf w shyla al 25er 
            
            //console.log(thisValue); // asglma al kima al htatktba fa thisValue lma aktba , 
            
            $('.tags').append('<span class="tag-span"><i class="fa fa-times"></i>' + thisValue + '</span>'); 
            
            $(this).val(''); // sfdya al val 3ashn m5dsha al tag tany 
            
        }
        
    }); 
    
    // remove tag on click 
    
    $('.tags').on('click' , '.tag-span i' , function () {
        
        $(this).parent().fadeOut(800); 
        
    }); 
    
    
    
    // trim text characters 
    
    $('.trimmed-texts .p-one').each(function () {
        
        //console.log($(this).text().length); // n3rfa 3dad al char da5la al p 
        
        if($(this).text().length > 200) {
            
            var trimmedText = $(this).text().substr(0 , 200); // a2t3a mn 0 al 100
            
            $(this).text(trimmedText + '...'); 
        }
        
    }); 
    
    
    function trimText(selectro , maxlenght) {
        
         $(selectro).each(function () {
                
        if($(this).text().length > maxlenght) {
            
            var trimmedText = $(this).text().substr(0 , maxlenght); // a2t3a mn 0 al 100
            
            $(this).text(trimmedText + '...'); 
        }
    
    }); 
    
    }
    
    
    trimText('.trimmed-texts .p-two' , 100); 
    
    
    // adjus elements height to be the same 
    
    var theMaxHeight = 0; 
    
    $('.same-height div').each(function () {
        
        if ($(this).height() > theMaxHeight){
            
            theMaxHeight = $(this).height(); 
        }
        
    }); 
    
     $('.same-height div').height(theMaxHeight); // kol al div hyso akbra m2sa div 3ndy 
    
    
    
    
    // shuffle cards 
    
    var zIndexValue = 0; 
    
    $('.cards .card').on('click' , function () {
                         
          $(this).animate({
              
               left : '20%',
               marginTop : 30
              
          }, 400 , function (){
              
              zIndexValue--; /* 3ashn al card ynzla t7ta al tany */ 
              
              $(this).css('z-index' , zIndexValue)
              
              
          }).animate({
              
               left : $(this).css('left'),
               marginTop : 0
              
              
          }, 400 );             
                         
    }); 
    
    
  // create blink warning 
    
    blinkWarning(); 
    
   function blinkWarning() {
       
       $('.blink-warning').fadeOut(1000, function () {
           
           $(this).fadeIn(1000); 
           
           blinkWarning(); /* 5lyta al fun hna 3ashn efdla e3da al fun aly mla nhya */
           
       }); 
   }
    
    
    
    
  
  // todo list 
    
    var newTask = $('.task-input'); 
    
    $('.add-task').on('submit' , function (e) {
    
        e.preventDefault(); // hmn3a aftrdy al btn 3ashn myb3tsh al date 
        
        if (newTask.val() != '') {
            
                $('<li>' + newTask.val() + '</li>').appendTo('.tasks'); // lo 3ezha tagy f al2ola use -> prependTo
            
                newTask.val(''); // fdyha b3d kd 
            
            }
    }); 
    
    $('.tasks').on('click', 'li' , function () { // bnst5ma al on 3ashn ay 3onsr by creta mn js 
        
        $(this).css('text-decoration', 'line-through').delay(200).fadeOut(400 , function (){
            
            $(this).remove(); // a7zfa al 3onsr nh2en 
            
        }); 
        
        
    }); 
    
    
    
    // type write effects 
    
    var theText = $('.typer').data('text'), // 5znta aly gwo al data-text
        
        theTextLenght = theText.length, // 3dad al 7rofaa // console.log(theText);   console.log(theTextLenght); 
        
        n = 0, 
        
        theTyper = setInterval(function () {
            
            $('.typer').each(function () {
                
                $(this).html($(this).html() + theText[n]); // thetext = al nas bta3y w al n = index console.log(theText[6]);
                
            }); 
            
            n += 1; // 3ashn ygba kol 7rofa al nas mash 2ola 7arf bs 
            
            if (n >= theTextLenght) { // n === theTextLenght
                
                    clearInterval(theTyper); // lma ya5lsa al nas yw2fa 
                
                }
            
        }, 50); 
    
    
   // calculate table 
    
    var theSummary = 0; 
    
    $('.price').each(function (){ // each 3ashn ya7sb kol al 7kola 
        
        theSummary += parseInt($(this).text()); 
        
    }); 
    
    $('.the-total').text(theSummary); 
    
    
    
    // auto change content 
    
    (function autoChange() {
        
      $('.ticker-list .active').each(function () {
          
          if (! $(this).is(':last-child')) {
              
              $(this).delay(1000).fadeOut(1000 , function () {
                  
                  $(this).removeClass('active').next().addClass('active').fadeIn(); 
                  
                  autoChange();
                  
              }); 
              
              } else { // 3ashn a5ra li 
                  
                  $(this).delay(1000).fadeOut(1000 , function () {
                      
                      $(this).removeClass('active'); 
                      
                      $('.ticker-list li').eq(0).addClass('active').fadeIn(); 
                      
                      autoChange();
                      
                      
                  }); 
                  
              }
          
      }); 
        
        
    }()); 
    
    
    
    // dynamic tabs 
    
    $('.tabs-list li').on('click', function () {
        
        //console.log($(this).data('content')); 
        
        $(this).addClass('active').siblings().removeClass('active');
        
        $('.content-list > div').hide(); 
        
        $($(this).data('content')).fadeIn(); 
        
        
    }); 
    
    // switch tabs view 
    
    $('.switch-tabs').on('click' , function () {
        
        $(this).next('.dynamic-tabs').toggleClass('left-tabs'); 
        
    }); 
    
    
    
    
    
    // email suggest box 
    
    var emailProviders = ['gmail.com' , 'hotmail.com' , 'outlook.com' , 'yahoo.com'],
        finalString = ''; 
    
    $('.email-suggest').on('keyup' , function (){
        
          finalString = ''; // reset variable 3ashn yfda 3ltoll w mykrarsh 
        
        if( ! $(this).next().is('.suggest-box')){  // al3onsr aly b3dka 3ashn nykretsh l kol 7arf 
            
            
            $('<ul class="suggest-box"></ul>').insertAfter($(this))  
            
        }
        
        for ( var i = 0; i < emailProviders.length; i++) {
            
            finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>'; 
            
        }
        
        
        $('.suggest-box').html(finalString); 
        
        //console.log(finalString); 
        
    }); 
    
    $('body').on('click' , '.suggest-box li' , function () {
        
         $('.email-suggest').val($(this).text()); 
        
         $(this).parent().fadeOut(300).remove(); // fadeout(); 
        
        
    }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
}); 














