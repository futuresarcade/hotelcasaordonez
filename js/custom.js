$(window).load(function() { // makes sure the whole site is loaded     
    
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(500).fadeOut(1000); // will fade out the white DIV that covers the website.
        $('body').delay(500).css({'overflow':'visible'});     	
		

	/* Main Slider **************************/
 
        $('.flexslider').flexslider({
            animationSpeed: 2000,
            slideshowSpeed: 7000,
            animation: "slide", 
            controlNav: true,
            touch:true,

                start: function(slider) {
             // animate your caption ... 
             // find the item that is the current slide's .slidecaption and animate it
             $('.slides').find('.flex-caption h1').fadeIn(600);
             $('.slides').find('.flex-caption p').delay(600).fadeIn(1200);
          },
                before: function(slider) {
             // animate your caption ... 
             // find the item that is the current slide's .slidecaption and animate it
             $('.slides').find('.flex-caption p').fadeOut(200);
             $('.slides').find('.flex-caption h1').delay(100).fadeOut(400);
          },
                after: function(slider) {
             // animate your caption ... 
             // find the item that is the current slide's .slidecaption and animate it
             $('.slides').find('.flex-caption h1').fadeIn(600);
             $('.slides').find('.flex-caption p').delay(600).fadeIn(1200);
          }

        });
 

})

$(document).ready(function(e) {   

	/* Fancybox *****************************/
	$('.fancybox').fancybox();
	
 
    /* Header Scroll Action */  
    $(function() { 
        $("<div id=header-bar-bg class='bg'></div>").appendTo(".header-bar");
        
        var offset_top = 0;
        var header_action = function(){
            var scroll_top = $(window).scrollTop(); // our current vertical position from the top

            if (scroll_top > offset_top) { 
                $('.header-bar').addClass("sticky");
                 
            } else {
                $('.header-bar').removeClass("sticky");        
            }   
        };
        
     $(window).scroll(function() {
             header_action();
        });
        
     });
    
   
	/* Main Menu ****************************/	
	$(function() {
    $('#main-nav').dropdown_menu();
	});
	
	 /* Mobile Nav *****************/
	$( window ).resize(function() {
	if ($( document ).width()> 480 ){
			 $('#main-nav').removeClass('main-menu-mini');
			 }
	});
	 	
	$('.mobile-nav a').click(
        function() {
			if($('#main-nav').hasClass('main-menu-mini')){
					$('#main-nav').removeClass('main-menu-mini');
				} 
			else {
	 				$('#main-nav').addClass('main-menu-mini');	
				}            
        }); 
	
	/* Welcome Panel ****************************/
	 $('.panel-button').click( function(){
		  
		 $('.panel-form').slideToggle(1,'linear')
              	 		
  	});
	
	/* Datetime Picker ****************************/
	 
    	$(function() {	
		$( ".datepicker" ).datepicker({
			inline: true,
			showOtherMonths: true
		});
	});  
	
    /* News Bar */
    $('.news-bar .head').click(function(){
        $('.news-bar .carousel').toggle('slide')               
                          
        });    
	 
    
    /* Tooltip */
    $(".tip-top").tooltip({placement : 'top'});
    $(".tip-right").tooltip({placement : 'right'});
    $(".tip-bottom").tooltip({placement : 'bottom'});
    $(".tip-left").tooltip({ placement : 'left'});
 
    
    /* Alerts **********************************/
	$(".alert").alert();
    
    /* Isotope *********************************/
    $('.fitrows').isotope({ layoutMode : 'fitRows' });
    
    $(window).load(function(){
    var $container = $('.gallerycontainer');
    $container.isotope({
        filter: 'div',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.galleryfilter a').click(function(){
        $('.galleryfilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
    
	/* Image Mouseover **********************/
   
	$(".img-hover").hover(function () {
			$(this).addClass("show",300);
		}, 
		function () {
		$(this).removeClass("show",300);
		});

    
     $('.img-hover').bind('touchstart', function() {
        $(this).addClass('show');
        });

    $('.img-hover').bind('touchend', function() {
            $(this).removeClass('show');
    });
    
    
    /* Rooms Hover **********************/
		$(".rooms-hover").hover(function () {
			$(this).addClass("show", 300);
		}, 
		function () {
		    $(this).removeClass("show",300);
		});

    
     $('.rooms-hover').bind('touchstart', function() {
        $(this).addClass('show');
        });

    $('.rooms-hover').bind('touchend', function() {
            $(this).removeClass('show');
    });
    
    
	/* Main Services **********************/
	 $(function() {
        $('.main-services-item').hover(function(){
        $('span',this).stop().show('fade', 1500);
    		}, function(){
        	$('span',this).hide();
    		});
	 });
	 
	 /* Go to top *************************/
	 $("a[href='#top']").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
	 });
	 
	 /* Flickr *********************/
	$(function(){       

    var id='27882652@N08';
    var limit ='21';

    // Flickr Photostream feed link.
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=" + id + "&lang=en-us&format=json&jsoncallback=?", 

		function(data){$.each(data.items, 
	
			function(i,item){
		
				// Number of thumbnails to show.            
				if(i < limit){
		
				// Create images and append to div id flickr and wrap link around the image.
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo("#flickr").wrap("<a class='fancybox' rel='flickr' href='" + item.media.m.replace('_m', '_z') + "' name='"+ item.link + "' title='" +  item.title +"'></a>");

				}
		
				}); 
	
			}); 

    });
	
	/* Input Placeholder ***********************/
		$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur().parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});
	
	/* ScrollBar *********************/
	$(document).ready(
	 function() { 
		$("html").niceScroll({
			cursorcolor:"#ccc",
			cursorborder:false,
			zindex:99999
			});
		});
   

});


/* Google Map */
    function initMap(){
                    var mapOptions = {
                        scaleControl: true,
                        center: new google.maps.LatLng(-2.894913,-79.004337),
                        zoom: 11,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: map.getCenter()
                    });

                    var markerB = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(41.0593111, 29.0146471)
                    });
                    var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent('<b>Hotel Casa Ordonez</b><br>859 Lamar Cuenca Ecuador');
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
    }	
    

 