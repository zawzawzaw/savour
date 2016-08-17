goog.provide('savour.component.DesktopHeader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The DesktopHeader constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.DesktopHeader = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.DesktopHeader.DEFAULT, options);
  this.element = element;


  this.main_logo = $("#desktop-header .main-logo");




    


  var $mainMenu = $(".main-menu");
  var $stickyHeaderContainer = $(".sticky-header-container");
  var $contentWrapper = $("#page-home-content");
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

      $('.all-dropdown[data-value=' + href + ']').slideDown(500, function(){
        $viewAllBtn.show();
      });       
    }else {
      $('.all-dropdown[data-value=' + href + ']').show();
    }

  });






  $("#desktop-menu nav ul li a").on('click mouseover', function(event){
    var target = $(event.currentTarget);
    var parent = target.parent();
    var value = parent.attr('data-value');


    var not_visible = $('.desktop-header-article-container').not('.desktop-header-article-container[data-value="' + value + '"]');
    var visible = $('.desktop-header-article-container[data-value="' + value + '"]');

    TweenMax.to(not_visible, 0.3, {autoAlpha: 0});
    TweenMax.to(visible, 0.3, {autoAlpha: 1});

    //$('.desktop-header-article-container').hide(0);
    //$('.desktop-header-article-container[data-value="' + value + '"]').show(0);
    
    $('#desktop-header').addClass('expandable-open-version');


  }.bind(this));



  this.element.mouseleave(function(event){
    $('#desktop-header').removeClass('expandable-open-version');
  }.bind(this));







  /*
  $contentWrapper.on("click mouseover", function(e){
    var $allDropdown = $(".all-dropdown");
    
    $viewAllBtn.hide(); 
    $allDropdown.slideUp(500, function(){
      $stickyHeaderContainer.removeClass("open-dropdown");      
    });   
  });
  */


  /*
  this.element.mouseleave(function(e){
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
  */

  this.is_search_open = false;
    
  
  TweenMax.delayedCall(0.2, function(){
    $('#desktop-header-search-txt').val('Search');
  }, [], this);
  
  $('#desktop-header-search-txt-container').submit(function(event) {
    if($('#desktop-header-search-txt').val() == 'Search'){
      $('#desktop-header-search-txt').focus();
      return false;
    }
  });  

  $('#desktop-header-open-search-btn').click(function(){
    if (this.is_search_open == true) {

      $('#desktop-header-search-txt-container').submit();

      // this.is_search_open = false;

      // $('#desktop-header-search-container').removeClass('open-version');
    } else {

      this.is_search_open = true;

      $('#desktop-header').addClass('search-open-version');
      $('#desktop-header-search-container').addClass('open-version');

      var $allDropdown = $(".all-dropdown");
      $viewAllBtn = $(".view-all");
      var $stickyHeaderContainer = $(".sticky-header-container");

      $viewAllBtn.hide(); 
      $allDropdown.slideUp(500, function(){
        $stickyHeaderContainer.removeClass("open-dropdown");  
      });
    }
  }.bind(this));




  $('#desktop-header-search-txt').focus(function(event){
    var input = $('#desktop-header-search-txt');
    var value = input.val();
    if(value == 'Search'){
      input.val('');
    }
  });

  $('#desktop-header-search-txt').blur(function(event){
    var input = $('#desktop-header-search-txt');
    var value = input.val();
    if(value == ''){
      input.val('Search');
    }
  });





  $('#desktop-header-close-search-btn').click(function(){

    this.is_search_open = false;

    $('#desktop-header').removeClass('search-open-version');
    $('#desktop-header-search-container').removeClass('open-version');

    $('#desktop-header-search-txt').val('Search');

  }.bind(this))


  console.log('savour.component.DesktopHeader: init');
};
goog.inherits(savour.component.DesktopHeader, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.DesktopHeader.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * DesktopHeader Event Constant
 * @const
 * @type {string}
 */
savour.component.DesktopHeader.EVENT_01 = '';

/**
 * DesktopHeader Event Constant
 * @const
 * @type {string}
 */
savour.component.DesktopHeader.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


/**
 * @param {ScrollMagic.Controller} controller_param
 */
savour.component.DesktopHeader.prototype.set_controller = function(controller_param) {


  if ($('body').hasClass('no-pin-page') == false) {

    var scene = new ScrollMagic.Scene({
      triggerElement: "#desktop-header-trigger",
      triggerHook: 0,
      duration: 140
    })
    .setTween(TweenMax.to('#desktop-header-top', 1, {height: 0, ease: Linear.easeNone}))
    // .addIndicators({name: "extra video"})
    .addTo(controller_param);

    var scene_02 = new ScrollMagic.Scene({
      triggerElement: "#desktop-header-trigger",
      triggerHook: 0,
      offset: 140
    })
    .setClassToggle($('#desktop-header-logo')[0],'sticky-version')
    // .addIndicators({name: "extra video"})
    .addTo(controller_param);


    /*
    var scene_02 = new ScrollMagic.Scene({
      triggerElement: "#desktop-header-trigger",
      triggerHook: 0,
      duration: 140
    })
    .setTween(TweenMax.to('#desktop-header-top-spacer', 1, {height: 0, ease: Linear.easeNone}))
    // .addIndicators({name: "extra video"})
    .addTo(controller_param);
    */
    

    /*
    var scene = new ScrollMagic.Scene({
      triggerElement: ".header-logo-container",
      triggerHook: 0,
      offset: 152
    })
    .setPin(".sticky-header-container")
    .setClassToggle(this.main_logo[0],'sticky-version')
    .addTo(controller_param);


    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".header-logo-container",
      triggerHook: 0,
      offset: 152
    })
    .setClassToggle($('#desktop-header-search-container')[0],'sticky-version')
    .addTo(controller_param);

    */
    
  }
  


};
savour.component.DesktopHeader.prototype.private_method_02 = function() {};
savour.component.DesktopHeader.prototype.private_method_03 = function() {};
savour.component.DesktopHeader.prototype.private_method_04 = function() {};
savour.component.DesktopHeader.prototype.private_method_05 = function() {};
savour.component.DesktopHeader.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.DesktopHeader.prototype.public_method_01 = function() {};
savour.component.DesktopHeader.prototype.public_method_02 = function() {};
savour.component.DesktopHeader.prototype.public_method_03 = function() {};
savour.component.DesktopHeader.prototype.public_method_04 = function() {};
savour.component.DesktopHeader.prototype.public_method_05 = function() {};
savour.component.DesktopHeader.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.component.DesktopHeader.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.DesktopHeader.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.DesktopHeader.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.DesktopHeader.prototype.on_event_handler_04 = function(event) {
};






savour.component.DesktopHeader.prototype.sample_method_calls = function() {

  // sample override
  savour.component.DesktopHeader.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.component.DesktopHeader.EVENT_01));
};