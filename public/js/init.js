/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {
   //myScroll = new IScroll(body, { mouseWheel: true });
   const myScroll = new IScroll('#wrapper', {
      probeType: 2,
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true,
      click: true
   });
    

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
let currentHash = null;
   myScroll.on('scrollEnd', () => {
      if (currentHash) {
         window.location.hash = currentHash;
         currentHash = null;
      }
      updateNavBar()
   })
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
       const endTop = $target[0].offsetTop
       myScroll.scrollTo(0, -endTop, 800);
       currentHash = target;

	   //  $('html, body').stop().animate({
	   //      'scrollTop': $target.offset().top
	   //  }, 800, 'swing', function () {
	   //      window.location.hash = target;
      //  });
      /*
      var start = null;
      const startTop = $('body').scrollTop()
      const endTop = $target[0].offsetTop
      const s = endTop - startTop
      totalTime = 800

      function step(timestamp) {
         if (!start) start = timestamp;
         var progress = timestamp - start;
         const next = startTop + progress * s / 800
         document.body.scrollTop = s < 0 ? Math.max(next, endTop) : Math.min(next, endTop);
         if (document.body.scrollTop === endTop) {
            window.location.hash = target;
         } else {
            window.requestAnimationFrame(step);
         }
         $('#log').html($('#log').html() + '<br />' + document.body.scrollTop)
      }

      window.requestAnimationFrame(step);*/

	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {
		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
      offset: '35%',
      context: document.body

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/
function updateNavBar() {
   console.log(123)
      var h = $('header').height();
      var y = -myScroll.y;
      var nav = $('#nav-wrap');
      
      //nav[0].style.top = y + 'px';

      if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
         nav.fadeOut('fast');
      }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

   }
   myScroll.on('scroll', updateNavBar);


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


});








