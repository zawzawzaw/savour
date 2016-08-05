goog.provide('savour.page.Home');
goog.require('savour.page.Default');


/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {savour.page.Default}
 */
savour.page.Home = function(options, element) {
  savour.page.Default.call(this, options, element);
  this.options = $.extend(this.options, savour.page.Home.DEFAULT, options);










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



























};
goog.inherits(savour.page.Home, savour.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
savour.page.Home.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
savour.page.Home.prototype.init = function() {

  savour.page.Home.superClass_.init.call(this);

  

  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//




//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//



//     _____     _______ ____  ____  ___ ____  _____
//    / _ \ \   / / ____|  _ \|  _ \|_ _|  _ \| ____|
//   | | | \ \ / /|  _| | |_) | |_) || || | | |  _|
//   | |_| |\ V / | |___|  _ <|  _ < | || |_| | |___
//    \___/  \_/  |_____|_| \_\_| \_\___|____/|_____|
//




/**
 * @override
 * @inheritDoc
 */
savour.page.Home.prototype.update_page_layout = function() {

  savour.page.Home.superClass_.update_page_layout.call(this);


  



};


/**
 * @override
 * @inheritDoc
 */
savour.page.Home.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  savour.page.Home.superClass_.scroll_to_target.call(this, str_param);

  /*
  // Mice venue landing - on hash change
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){

    // console.log('str_param: ' + str_param);
    if (str_param == "indoor-venue") {
      this.mice_landing_mobile_indoor_open();

    } else if (str_param == "outdoor-venue") {
      this.mice_landing_mobile_outdoor_open();

    } else if (str_param == "ballrooms-venue") {
      this.mice_landing_mobile_ballrooms_open();
    }

  }
  */

};
/**
 * @override
 * @inheritDoc
 */
savour.page.Home.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//



//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('savour.page.Home', savour.page.Home);