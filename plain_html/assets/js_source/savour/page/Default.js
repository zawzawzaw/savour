goog.provide('savour.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('manic.page.Page');


goog.require('savour.component.DesktopHeader');
goog.require('savour.component.MobileHeader');



/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
savour.page.Default = function(options) {

  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, savour.page.Default.DEFAULT, options);


};
goog.inherits(savour.page.Default, manic.page.Page);


/**
 * like jQuery options
 * @const {object}
 */
savour.page.Default.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Default Event Constant
 * @const
 * @type {string}
 */
savour.page.Default.EVENT_01 = '';

/**
 * Default Event Constant
 * @const
 * @type {string}
 */
savour.page.Default.EVENT_02 = '';



//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//



/**
 * @override
 */
savour.page.Default.prototype.init = function() {
  savour.page.Default.superClass_.init.call(this);

  window.onbeforeunload = function(){ window.scrollTo(0,0); }     // from zaw's main.js


  this.desktop_header = new savour.component.DesktopHeader({}, $('#desktop-header'));
  this.desktop_header.set_controller(this.controller);

  this.mobile_header = new savour.component.MobileHeader({}, $('#mobile-header'));


  $('.page-template-slider').slick({
    'speed': 350,
    'dots': false,
    'arrows': true,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'autoplay': true,
    'autoplaySpeed': 4000
  });
  

  console.log('savour.page.Default: init');
};

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.page.Default.prototype.private_method_01 = function() {};
savour.page.Default.prototype.private_method_02 = function() {};
savour.page.Default.prototype.private_method_03 = function() {};
savour.page.Default.prototype.private_method_04 = function() {};
savour.page.Default.prototype.private_method_05 = function() {};
savour.page.Default.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.page.Default.prototype.public_method_01 = function() {};
savour.page.Default.prototype.public_method_02 = function() {};
savour.page.Default.prototype.public_method_03 = function() {};
savour.page.Default.prototype.public_method_04 = function() {};
savour.page.Default.prototype.public_method_05 = function() {};
savour.page.Default.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.page.Default.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.page.Default.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.page.Default.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.page.Default.prototype.on_event_handler_04 = function(event) {
};






savour.page.Default.prototype.sample_method_calls = function() {

  // sample override
  savour.page.Default.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.page.Default.EVENT_01));
};