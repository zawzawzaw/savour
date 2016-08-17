goog.provide('savour.component.MobileHeader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


/**
 * The MobileHeader constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.MobileHeader = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.MobileHeader.DEFAULT, options);
  this.element = element;

  this.body = $('body');
  this.body_element = $('body');

  this.window_scroll = 0;

  this.previous_scroll_position = 0;

  this.window = $(window);
  //this.window.scroll(this.on_window_scroll.bind(this));       // this was for desktop header ?
  //this.on_window_scroll(null);

  this.is_open = false;

  this.is_search_open = false;
  
  this.expand_container = $('#mobile-header-expanded');
  this.page_wrapper = $('#page-wrapper');

  this.open_btn = this.element.find('#mobile-header-open-btn');
  this.close_btn = this.element.find('#mobile-header-close-btn');

  this.search_btn = this.element.find('#mobile-header-search-btn');
  this.search_close_btn = this.element.find('#mobile-header-search-close-btn');
  

  this.search_form_container = this.element.find('#mobile-header-search-form-container');
  



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //



  this.open_btn.click(this.on_open_btn_click.bind(this));
  this.close_btn.click(this.on_close_btn_click.bind(this));

  this.search_btn.click(this.on_search_btn_click.bind(this));
  this.search_close_btn.click(this.on_search_close_btn_click.bind(this));

  TweenMax.delayedCall(0.2, function(){
    $('#mobile-header-search-txt').val('Search');
  }, [], this);

  $('#mobile-header-search-txt').focus(function(event){
    var input = $('#mobile-header-search-txt');
    var value = input.val();
    if(value == 'Search'){
      input.val('');
    }
  });

  $('#mobile-header-search-txt').blur(function(event){
    var input = $('#mobile-header-search-txt');
    var value = input.val();
    if(value == ''){
      input.val('Search');
    }
  });

  this.element.find('#mobile-header-search-form').submit(function(event) {
    if($('#mobile-header-search-txt').val() == 'Search'){
      $('#mobile-header-search-txt').focus();
      return false;
    }
  });  






  console.log('init');
};
goog.inherits(savour.component.MobileHeader, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MobileHeader
 * @const {object}
 */
savour.component.MobileHeader.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * MobileHeader Event Constant
 * @const
 * @type {string}
 */
savour.component.MobileHeader.ON_OPEN = 'on_open';

/**
 * MobileHeader Event Constant
 * @const
 * @type {string}
 */
savour.component.MobileHeader.ON_CLOSE = 'on_close';


//     ____ ____  _____    _  _____ _____ 
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|  
//   | |___|  _ <| |___ / ___ \| | | |___ 
//    \____|_| \_\_____/_/   \_\_| |_____|
//                                        


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.MobileHeader.prototype.open_menu = function() {

  console.log('MobileHeader: open_menu');

  if (this.is_open == false) {
    this.is_open = true;
    console.log('MobileHeader: open_menu: inside');


    this.body.addClass('mobile-menu-open');

    this.previous_scroll_position = this.window.scrollTop();
    console.log('previous_scroll_position: ' + this.previous_scroll_position);

    this.page_wrapper.addClass('hidden-version');
    this.expand_container.addClass('expand-version');


    TweenMax.to(this.close_btn, 0.3, {autoAlpha: 1});
    TweenMax.to(this.open_btn, 0.3, {autoAlpha: 0});
    
    this.dispatchEvent(new goog.events.Event(savour.component.MobileHeader.ON_OPEN));

  }
};
savour.component.MobileHeader.prototype.close_menu = function() {
  if (this.is_open == true) {
    this.is_open = false;


    this.close_search();

    this.body.removeClass('mobile-menu-open');

    console.log('previous_scroll_position set: ' + this.previous_scroll_position);
    
    this.page_wrapper.removeClass('hidden-version');
    this.expand_container.removeClass('expand-version');
    
    TweenMax.to(this.close_btn, 0.3, {autoAlpha: 0});
    TweenMax.to(this.open_btn, 0.3, {autoAlpha: 1});
    
    TweenMax.delayedCall(0.2, function(){
      this.window.scrollTop(this.previous_scroll_position);
    }, [], this);

    this.window.scrollTop(this.previous_scroll_position);

    this.dispatchEvent(new goog.events.Event(savour.component.MobileHeader.ON_CLOSE));

  }
};


savour.component.MobileHeader.prototype.open_search = function(){;

  if(this.is_search_open == false){

    this.is_search_open = true;
    this.element.addClass('search-open-version');

    TweenMax.to(this.search_close_btn, 0.5, {autoAlpha: 1});
    TweenMax.to(this.search_form_container, 0.5, {autoAlpha: 1});
    
    

  }
  

};
savour.component.MobileHeader.prototype.close_search = function(){
  if(this.is_search_open == true){

    this.is_search_open = false;
    this.element.removeClass('search-open-version');

    TweenMax.to(this.search_close_btn, 0.5, {autoAlpha: 0});
    TweenMax.to(this.search_form_container, 0.5, {autoAlpha: 0});

    $('#mobile-header-search-txt').val('Search');

  }
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
savour.component.MobileHeader.prototype.on_open_btn_click = function(event) {
  this.open_menu();
};

/**
 * event handler
 * @param  {object} event
 */
savour.component.MobileHeader.prototype.on_close_btn_click = function(event) {
  this.close_menu();
};


/**
 * event handler
 * @param  {object} event
 */
savour.component.MobileHeader.prototype.on_search_btn_click = function(event) {
  

  if(this.is_search_open == false){
    this.open_search();
  } else {
    this.element.find('#mobile-header-search-form').submit();
  }

};
/**
 * event handler
 * @param  {object} event
 */
savour.component.MobileHeader.prototype.on_search_close_btn_click = function(event) {
  this.close_search();
};





/**
 * event handler
 * @param  {object} event
 */
savour.component.MobileHeader.prototype.on_window_scroll = function(event) {
  var current_window_scroll = this.window.scrollTop();

  if(current_window_scroll > 10){

    if (current_window_scroll > this.window_scroll) {
      this.element.addClass('sticky-version');
      this.body_element.addClass('body-sticky-version');
    } else {
      this.element.removeClass('sticky-version');
      this.body_element.removeClass('body-sticky-version');
    }

  } else {
    this.element.removeClass('sticky-version');
    this.body_element.removeClass('body-sticky-version');
  }

  this.window_scroll = current_window_scroll;

};