(function($){

	function headerAnimation(scrollMagicController) {
		var headerTl = new TimelineMax();
		var $mainLogo = $(".main-logo");
		var $stickyHeaderContainer = $(".sticky-header-container");

		var LovefoodPosition = $(".love-food").offset();

        headerTl.add([
            TweenMax.fromTo($mainLogo, 0.3, { y: 10, opacity: 0 }, { y: 0, opacity: 1, ease: Sine.easeOutQuad }),            
        ]);

		var scene = new ScrollMagic.Scene({
			    triggerElement: ".header-logo-container",
			    triggerHook: 0,
			    offset: 152
		  	})
			.setPin(".sticky-header-container")
		  	.setTween(headerTl)
		  	.addTo(scrollMagicController);  
	}

	function menuHover() {

		var $mainMenu = $(".main-menu");
		var $stickyHeaderContainer = $(".sticky-header-container");
		var $contentWrapper = $("#content-wrapper");
		var $headerLogoContainer = $(".header-logo-container");	
		var $viewAllBtn = $(".view-all");	
		
		$mainMenu.find("a").on("click mouseover", function(e){
			e.preventDefault();
			e.stopPropagation();

			var $this = $(this);
			var href = $this.attr("href");
			var $allDropdown = $(".all-dropdown");
		
			$allDropdown.hide();
			if(!$stickyHeaderContainer.hasClass("open-dropdown")) {
				$stickyHeaderContainer.addClass("open-dropdown");				
				$(href).slideDown(500, function(){
					$viewAllBtn.show();
				});				
			}else {
				$(href).show();
			}

		});

		$contentWrapper.on("click mouseover", function(e){
			var $allDropdown = $(".all-dropdown");
			
			$viewAllBtn.hide();	
			$allDropdown.slideUp(500, function(){
				$stickyHeaderContainer.removeClass("open-dropdown");			
			});		
		});

		$headerLogoContainer.on("click mouseover", function(e){
			var $allDropdown = $(".all-dropdown");
			
			$viewAllBtn.hide();	
			$allDropdown.slideUp(500, function(){
				$stickyHeaderContainer.removeClass("open-dropdown");	
			});			
		});

	}

  	function init() {
  		window.onbeforeunload = function(){ window.scrollTo(0,0); }

	  	$('#content-wrapper').imagesLoaded( { background: true }, function() {	

  		  	setTimeout(function(){
		  		$('body').addClass('loaded');
		  	}, 1000);
		});

		$('.food-carousel').slick({
		  	dots: true,
		  	infinite: true,
		  	speed: 500,
		  	fade: true,
		  	cssEase: 'linear',
		  	arrows: false,
	  	 	autoplay: true,
	  	 	autoplaySpeed: 3000,
		});

		var scrollMagicController = new ScrollMagic.Controller({addIndicators: false}); 
		scrollMagicController.enabled(true);
        headerAnimation(scrollMagicController);


        menuHover();

  	}

  	init();

})(jQuery);