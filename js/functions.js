// 
// Dear maintainer:
// 
// Once you are done trying to 'optimize' these scripts,
// and have realized what a terrible mistake that was,
// please increment the following counter as a warning
// to the next guy:
// 
// total_hours_wasted_here = 68
// 
//This code sucks, you know it and I know it.  
//Move on and call me an idiot later.
/****************************************************************
		*                                                           *
		*  .=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.       *
		*   |                     ______                     |      *
		*   |                  .-"      "-.                  |      *
		*   |                 /            \                 |      *
		*   |     _          |              |          _     |      *
		*   |    ( \         |,  .-.  .-.  ,|         / )    |      *
		*   |     > "=._     | )(__/  \__)( |     _.=" <     |      *
		*   |    (_/"=._"=._ |/     /\     \| _.="_.="\_)    |      *
		*   |           "=._"(_     ^^     _)"_.="           |      *
		*   |               "=\__|IIIIII|__/="               |      *
		*   |              _.="| \IIIIII/ |"=._              |      *
		*   |    _     _.="_.="\          /"=._"=._     _    |      *
		*   |   ( \_.="_.="     `--------`     "=._"=._/ )   |      *
		*   |    > _.="                            "=._ <    |      *
		*   |   (_/                                    \_)   |      *
		*   |                                                |      *
		*   '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='      *
		*                                                           *
		*      LASCIATE OGNI SPERANZA, VOI CH'ENTRATE               *
		*************************************************************/
(function($)
{
	"use strict"

	/* Event - Window Scroll */
	$(window).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= 300 )
		{
			$('.header-section').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header-section').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header-section').removeClass("navbar-fixed-top");
		} // set sticky menu - end		

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	/* Event - Window Scroll /- */

	$('#back-to-top').click(function()
	{
		// When arrow is clicked
		$('body,html').animate(
		{
			scrollTop : 0 // Scroll to top of body
		},800);
	});
	
	/* Service Section */
	$('.service-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.service-section .col-md-6:nth-child(even) .service-box-inner').addClass('animated slideInLeft');
			$('.service-section .col-md-6:nth-child(odd) .service-box-inner').addClass('animated slideInRight');
						
		});
	});
	
	/* Feature Section */
	$('.features-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.features-section .col-md-7').addClass('animated slideInLeft');
			$('.features-section .col-md-5').addClass('animated slideInRight');
		});
	});
	
	/* My Work */
	$('.my-work').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.my-work .section-header').addClass('animated fadeInDown');
			$('.my-work .portfolio-categories').addClass('animated fadeInUp');
			$('.my-work .portfolio-list li').addClass('animated rollIn');
		});
	});
	
	/* Why Choose Me */
	$('.why-choose').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.why-choose .col-md-6').addClass('animated fadeInRight');
		});
	});
	
	/* How I Work */
	$('.research-slope').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.research h3').addClass('animated fadeInRight');
			$('.research p').addClass('animated fadeInRight');
		});
	});
	
	$('.my-perfection-slope').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.my-perfection-slope h3').addClass('animated fadeInLeft');
			$('.my-perfection-slope p').addClass('animated fadeInLeft');
		});
	});
	$('.clean-code').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.clean-code h3').addClass('animated fadeInRight');
			$('.clean-code p').addClass('animated fadeInRight');
		});
	});
	
	$('.my-launch-slope').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.my-launch-slope h3').addClass('animated fadeInLeft');
			$('.my-launch-slope p').addClass('animated fadeInLeft');
		});
	});
	
	/* 	Application Section */
	$('.application-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.application-section .application-iphone').addClass('animated fadeInLeft');
			$('.application-section .app-content-box').addClass('animated fadeInRight');
		});
	});
	
	/* My Genius */
		/* Style 1 */
	$('.my-genius .style1').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");
		
		$this.appear(function()
		{				
			$('.style1').hover(function() {
				
				$('#style1-hover').show(); 
				
				var $this = $(this);
				var myVal = $(this).data("value");	

				$this.appear(function()
				{
					var skill_item_count = 0;
					var skills_count = 0;					
					skill_item_count = $( "[id*='skill_count-']" ).length;
					
					var skill_bar_count = 0;
					var skills_bar_count = 0;
					skill_bar_count = $( "[id*='skill_bar_count-']" ).length;
					//alert(skill_bar_count);

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
						// $("[id*='skill_count-"+i+"']").css('width', skills_count);
					}
					
					for(var j=1; j<=skill_bar_count; j++)
					{
						skills_bar_count = $( "[id*='skill_count-"+j+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
					}
				});
			
			});
			// $('.style1.style-active .hover').css('display','block');
			$('.style1').css('clip-path','url("#clipPolygon1")');
		});
		
		/* Active */
		$('.style1.style-active').each(function() {
			$('#style1-hover').css('display','block');
			
			var $this = $(this);
			var myVal = $(this).data("value");	

			$this.appear(function()
			{
				var skill_item_count = 0;
				var skills_count = 0;					
				skill_item_count = $( "[id*='skill_count-']" ).length;
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar_count-']" ).length;
				//alert(skill_bar_count);

				for(var i=1; i<=skill_item_count; i++)
				{
					skills_count = $( "[id*='skill_count-"+i+"']" ).attr( "data-skills_percent" );
					$("[id*='skill_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
					// $("[id*='skill_count-"+i+"']").css('width', skills_count);
				}
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_count-"+j+"']" ).attr( "data-skills_percent" );
					$("[id*='skill_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
				}
			});
		});
	});
		/* Style 3 */
	$('.my-genius .style3').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{			
			$('.style3').hover(function() {
				
				$('.style1.style-active .hover').css('display','none');
				$('#style1-hover').css('display','none');
				$('#style3-hover').show(); 
				var $this = $(this);
				var myVal = $(this).data("value");	

				$this.appear(function()
				{
					var skill_item_count = 0;
					var skills_count = 0;					
					skill_item_count = $( "[id*='skill_3_count-']" ).length;
					
					var skill_bar_count = 0;
					var skills_bar_count = 0;
					skill_bar_count = $( "[id*='skill_3_bar_count-']" ).length;
					//alert(skill_bar_count);

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_3_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_3_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
						// $("[id*='skill_count-"+i+"']").css('width', skills_count);
					}
					
					for(var j=1; j<=skill_bar_count; j++)
					{
						skills_bar_count = $( "[id*='skill_3_count-"+j+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_3_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
					}
				});				
			},
			function() { 
				$('#style3-hover').hide();
				$('.style1.style-active .hover').css('display','block');
				$('#style1-hover').show();
				
			});
		});
		$('.style3').css('clip-path','url("#clipPolygon3")');		
	});
		/* Style 4 */
	$('.my-genius .style4').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.style4').hover(function() {
				
				$('#style4-hover').show();				
				$('.style1.style-active .hover').css('display','none');
				$('#style1-hover').hide();
				var $this = $(this);
				var myVal = $(this).data("value");	

				$this.appear(function()
				{
					var skill_item_count = 0;
					var skills_count = 0;					
					skill_item_count = $( "[id*='skill_4_count-']" ).length;
					
					var skill_bar_count = 0;
					var skills_bar_count = 0;
					skill_bar_count = $( "[id*='skill_4_bar_count-']" ).length;
					//alert(skill_bar_count);

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_4_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_4_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
						// $("[id*='skill_count-"+i+"']").css('width', skills_count);
					}
					
					for(var j=1; j<=skill_bar_count; j++)
					{
						skills_bar_count = $( "[id*='skill_4_count-"+j+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_4_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
					}
				});
			
			}, function() { 
				$('#style4-hover').hide();
				$('.style1.style-active .hover').css('display','block');
				$('#style1-hover').show();
			});
		});
		$('.style4').css('clip-path','url("#clipPolygon4")');
	});
		/* Style 5 */
	$('.my-genius .style5').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.style5').hover(function() {
				
				$('#style5-hover').show();
				$('.style1.style-active .hover').css('display','none');
				$('#style1-hover').hide();
				var $this = $(this);
				var myVal = $(this).data("value");	

				$this.appear(function()
				{
					var skill_item_count = 0;
					var skills_count = 0;					
					skill_item_count = $( "[id*='skill_5_count-']" ).length;
					
					var skill_bar_count = 0;
					var skills_bar_count = 0;
					skill_bar_count = $( "[id*='skill_5_bar_count-']" ).length;
					//alert(skill_bar_count);

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_5_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_5_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
						// $("[id*='skill_count-"+i+"']").css('width', skills_count);
					}
					
					for(var j=1; j<=skill_bar_count; j++)
					{
						skills_bar_count = $( "[id*='skill_5_count-"+j+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_5_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
					}
				});
			}, function() { 
				$('#style5-hover').hide();
				$('.style1.style-active .hover').css('display','block');
				$('#style1-hover').show();
			});
		});
		$('.style5').css('clip-path','url("#clipPolygon5")');
	});
		/* Style 6 */
	$('.my-genius .style6').each(function () 
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.style6').hover(function() {
				
				$('#style6-hover').show();
				$('.style1.style-active .hover').css('display','none');
				$('#style1-hover').hide();
				var $this = $(this);
				var myVal = $(this).data("value");	

				$this.appear(function()
				{
					var skill_item_count = 0;
					var skills_count = 0;					
					skill_item_count = $( "[id*='skill_6_count-']" ).length;
					
					var skill_bar_count = 0;
					var skills_bar_count = 0;
					skill_bar_count = $( "[id*='skill_6_bar_count-']" ).length;
					//alert(skill_bar_count);

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_6_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_6_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
						// $("[id*='skill_count-"+i+"']").css('width', skills_count);
					}
					
					for(var j=1; j<=skill_bar_count; j++)
					{
						skills_bar_count = $( "[id*='skill_6_count-"+j+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_6_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
					}
				});
				
			}, function() { 
				$('#style6-hover').hide();
				$('.style1.style-active .hover').css('display','block');
				$('#style1-hover').show();
			});
		});
		$('.style6').css('clip-path','url("#clipPolygon6")');
	});
	
		/* Style 7 */
	$('.my-genius .style7').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.style7').hover(function() {
				
				$('#style7-hover').show();
				$('.style1.style-active .hover').css('display','none');
				$('#style1-hover').hide();
				var $this = $(this);
				var myVal = $(this).data("value");	

				$this.appear(function()
				{	
				
					var skill_item_count = 0;
					var skills_count = 0;					
					skill_item_count = $( "[id*='skill_6_count-']" ).length;
					
					var skill_bar_count = 0;
					var skills_bar_count = 0;
					skill_bar_count = $( "[id*='skill_6_bar_count-']" ).length;
					//alert(skill_bar_count);

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_7_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_7_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
						// $("[id*='skill_count-"+i+"']").css('width', skills_count);
					}
					
					for(var j=1; j<=skill_bar_count; j++)
					{
						skills_bar_count = $( "[id*='skill_7_count-"+j+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_7_bar_count-"+j+"']").css({'width': skills_bar_count+'%'});
					}
				});
			}, function() { 
				$('#style7-hover').hide();
				$('.style1.style-active .hover').css('display','block');
				$('#style1-hover').show();
			});
		});
		$('.style7').css('clip-path','url("#clipPolygon7")');
	});
	
	$('.my-genius .style2').each(function ()
	{		
		$('.style2').css('clip-path','url("#clipPolygon2")');	
	});	
	
	$('.my-genius').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.my-genius .genius-gallery .style1').addClass('animated fadeInLeft');
			/*$('.our-genius .genius-gallery .style2').addClass('animated fadeInDown');*/
			$('.my-genius .genius-gallery .style3').addClass('animated fadeInRight');
			$('.my-genius .genius-gallery .style6').addClass('animated fadeInLeft');
			$('.my-genius .genius-gallery .style7').addClass('animated fadeInRight');
		});
	});
	
	
	/* Blog Section */
	
	$('.blog-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.blog-section .section-header').addClass('animated fadeInDown');
			$('.blog-section .post').addClass('animated fadeInUp');
		});
	});

	/* Client Section */
	$('.client-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.client-section .client-style1').addClass('animated fadeInDown');
			$('.client-section .client-style2').addClass('animated fadeInLeft');
			$('.client-section .client-style3').addClass('animated fadeInUp');			
		});
		
		$('.client-style1').hover(function() {
			$('.client-style1').addClass('client-active');
			$('.client-style2').removeClass('client-active');
			$('.client-style1:hover').css('clip-path','url("#client-12")');
		}, function() { 
			$('.client-style2').addClass('client-active');
			$('.client-style1').removeClass('client-active');
			$('.client-style1').css('clip-path','url("#client-1")');
			$('.client-style2').css('clip-path','url("#client-21")');
		});
		
		$('.client-style3').hover(function() {
			$('.client-style3').addClass('client-active');
			$('.client-style2').removeClass('client-active');
			$('.client-style3').css('clip-path','url("#client-31")');
		}, function() { 
			$('.client-style2').addClass('client-active');
			$('.client-style3').removeClass('client-active');
			$('.client-style3').css('clip-path','url("#client-3")');
			$('.client-style2').css('clip-path','url("#client-21")');
		});
		
		
		//$('.client-style2').css('clip-path','url("#client-2")');
		//$('.client-style3').css('clip-path','url("#client-3")');
	});
	
	/* Brag About Section */
	$('.brag-about-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.brag-about-section .brag-about-img').addClass('animated fadeInDown');
			$('.brag-about-section .brag-content').addClass('animated fadeInLeft');
		});
	});

	/* Social Section */
	$('.social-main').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.social-main > div').addClass('animated bounceInUp');
		});
	});	
	
	/* Project Section */
	$('.project-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.project-section .start-project p').addClass('animated fadeInLeft');
			$('.project-section .start-project h2').addClass('animated fadeInLeft');
			$('.project-section .start-project').addClass('animated fadeInLeft');
			$('.project-section .send-msg p').addClass('animated fadeInRight');
			$('.project-section .send-msg h2').addClass('animated fadeInRight');
			$('.project-section .send-msg').addClass('animated fadeInRight');
		});
	});	

	
	/*
	/*TODO: Drive an ashen stake through the foul heart of this function.
	$('#creative-our-skill-section').each(function ()
	{		
		var $this = $(this);
		var myVal = $(this).data("value");	

		$this.appear(function()
		{
			var skill_item_count = 0;
			var skills_count = 0;

			skill_item_count = $( "[id*='skill_count-']" ).length;

			for(var i=1; i<=skill_item_count; i++)
			{
				skills_count = $( "[id*='skill_count-"+i+"']" ).attr( "skills_percent" );
				$("[id*='skill_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
				// $("[id*='skill_count-"+i+"']").css('width', skills_count);
			}
		});				
	});	*/
	
	$('.dial').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");		

		$this.appear(function()
		{
			// alert(myVal);
			$this.knob({ });
			$({ value: 0 }).animate({ value: myVal },
			{
				duration: 2000,
				easing: 'swing',
				step: function ()
				{
					$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
		});
	});
	
	// 08 - Line Progress Bar
	/*$('.skills-wrapper').appear(function()
	{
		var skill_item_count = 0;
		var skills_count = 0;

		skill_item_count = $( "[class*='skill_count-']" ).length;
		for(var i=1; i<=skill_item_count; i++)
		{
			skills_count = $( "[class*='skill_count-"+i+"']" ).attr( "skills_percent" );
			$("[class*='skill_count-"+i+"']").css('width', skills_count);
		}
	},{accX: 0, accY: -70});*/
	
	
	
	
	/* Statistics Section */
	$('.statistics-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('#project').animateNumber({ number: 145 }, 2000);
			$('#work').animateNumber({ number: 2456 }, 2000);
			$('#consumed').animateNumber({ number: 3125 }, 2000);
			$('#videos').animateNumber({ number: 2478 }, 2000);
		});
	});
	
	/* Event - Document Ready /- */	
	$(document).ready(function($)
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$('.header').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header').removeClass("navbar-fixed-top");
		} // set sticky menu - end

		$('.navbar-nav li a, .logo-block a').bind('click', function(event)
		{
			var anchor = $(this);

			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 72 }, 1500, 'easeInOutExpo' );					
				}
				event.preventDefault();
			}
		});

		$('.goto-next a').bind('click', function(event)
		{
			var anchor = $(this);

			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 150 }, 1500, 'easeInOutExpo' );			
				}
				event.preventDefault();
			}
		});
		
		$('.my-work .portfolio-categories li > a').on('click', function(event)
		{
			$('.my-work .portfolio-categories li > a').removeClass('active');
			$(this).addClass('active');
		});
		
		
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
		
		/*$("#client-testimonials").owlCarousel(
		{
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			navigation : true,
			pagination: false
		});*/
		
		
		
		/* Skill Section */
		/*$('.portfolio-accordion-skill .skill-progress-box').appear(function() {
			$('.illustrator').css('width', '80%');
			$('.wordpress').css('width', '72%');
			$('.html-css').css('width', '50%');
			$('.photoshop').css('width', '80%');
			$('.javascript').css('width', '68%');
			$('.coreldraw').css('width', '90%');
			}
		);*/
		
		// picker buttton
		$(".picker_close").click(function()
		{
			$("#choose_color").toggleClass("position");
		});
			
	});
	/* document.ready /- */

	/* Event - Window Resize /- */
	$(window).resize(function()
	{
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
		// $(".header").css("height", window_height + "px");
	});
	/* Event - Window Resize /- */

	var $itemsHolder = $('.portfolio-list');
	var $itemsClone = $itemsHolder.clone(); 
	var $filterClass = "";
	$('.portfolio-categories li').click(function(e)
	{
		e.preventDefault();
		$filterClass = $(this).attr('data-value');
		if($filterClass == 'all')
		{
			var $filters = $itemsClone.find('li');
		}
		else
		{
			var $filters = $itemsClone.find('li[data-type='+ $filterClass +']');
		}
		$itemsHolder.quicksand(
		$filters,
		{
			duration: 1000
		});
	});
	
	$('#photos-slider').superslides({
		animation: 'fade',
		pagination: true
	});
	
	var wow = new WOW(
	{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true        // act on asynchronously loaded content (default is true)
	});
	wow.init();

/* Event - Window Load */
	$(window).on('load', function ()
{		
	/* Loader */
	$("#site-loader").delay(2000).fadeOut("slow");
});
/* Event - Window Load /- */

})(jQuery);


var isIframe =  function() {
	var isIframe = false;
	try{
		//try to access the document object
		if (self.location.href != top.location.href)
			isIframe = true;
	}catch(e) {
		//We don't have access, it's cross-origin!
		isIframe = true;
	}
	return isIframe;
};


jQuery(function () {
	var myPlayer = jQuery("#bgndVideo").YTPlayer({
		onReady: function (player) {
			YTPConsole.append(player.id + " player is ready");
			YTPConsole.append("<br>");
		}
	});

	/* DEBUG ******************************************************************************************/

	var YTPConsole = jQuery("#eventListener");
	// EVENT: YTPStart YTPEnd YTPLoop YTPPause YTPBuffering
	myPlayer.on("YTPStart YTPEnd YTPLoop YTPPause YTPBuffering", function (e) {
		YTPConsole.append(e.type + " - " + jQuery("#bgndVideo").getPlayer().getPlayerState() + " - time: " + e.time);
		YTPConsole.append("<br>");
	});
	// EVENT: YTPChanged
	myPlayer.on("YTPChanged", function (e) {
		YTPConsole.html("");
	});

	// EVENT: YTPData
	myPlayer.on("YTPData", function (e) {
		YTPConsole.append("******************************");
		YTPConsole.append("<br>");
		YTPConsole.append(e.type);
		YTPConsole.append("<br>");
		YTPConsole.append(e.prop.title);
		YTPConsole.append("<br>");
		YTPConsole.append(e.prop.description.replace(/\n/g, "<br/>"));
		YTPConsole.append("<br>");
		YTPConsole.append("******************************");
		YTPConsole.append("<br>");
	});

	// EVENT: YTPTime
	myPlayer.on("YTPTime", function (e) {
		var currentTime = e.time;
		var player = e.target.wrapper;
		var traceLog = currentTime / 4 == Math.floor(currentTime / 4);

		if (traceLog && YTPConsole.is(":visible")) {
			YTPConsole.append(e.type + " actual time is: " + currentTime);
			YTPConsole.append("<br>");
		}
	});

	/* DEBUG END ******************************************************************************************/

});

var v = false;
function changeVideo() {
	var vID = v ? "7SnmCUwOsts" : "BsekcY04xvQ";
	jQuery('#bgndVideo').changeMovie({videoURL: vID});
	$("#vidData").toggle(1000);
	v = !v;
}
//The following is the hacky code used to un-reversify emails and phone numbers as a spam-bot protection
//works, technically.   Is probably a shitty defense in reality.
/*
function reverseEmails() {
  if (jQuery(".eml.reverse").length > 0) {
    jQuery(".eml.reverse").each(function() {
      var that  = jQuery(this);
      var email = that.text().split("").reverse().join("");
      that.removeClass("reverse");
      that.html("<a href='mailto:" + email + "'>" + email + "</a>");
    });
  }
}


// Just to show the phases slowly
jQuery("span").removeClass("reverse");
setTimeout(function(){ jQuery("span").addClass("reverse")},2500);
setTimeout(function(){ reverseEmails();},5000);

$(function() {
  $('progress').each(function() {
    var max = $(this).val();roundtrip.js
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
			});
});
*/