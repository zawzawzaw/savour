goog.provide('savour.component.InstagramDetailPopup');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('savour.component.InstagramDataItem');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.InstagramDetailPopup = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.InstagramDetailPopup.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, savour.component.InstagramDetailPopup.DEFAULT, options);
  


  /**
   * @type {Array.<savour.component.InstagramDataItem>}
   */
  this.data_array = [];


  /**
   * @type {savour.component.InstagramDataItem}
   */
  this.current_data = null;
  this.current_index = -1;



  this.switch_counter = 0;


  this.instagram_iframe_content = this.element.find('#instagram-iframe-content');
  this.instagram_iframe_01 = this.element.find('#instagram-iframe-01');
  this.instagram_iframe_02 = this.element.find('#instagram-iframe-02');
  this.instagram_white_bg = this.element.find('#instagram-iframe-content .white-bg');

  this.overlay_bg = this.element.find('.instagram-overlay-bg');
  this.overlay_bg.click(function(event){
    console.log('close bg')
    this.close_overlay();
  }.bind(this));


  this.overlay_next_btn = this.element.find('.next-btn');
  this.overlay_next_btn.click(function(event){
    this.next_post();
  }.bind(this));


  this.overlay_prev_btn = this.element.find('.prev-btn');
  this.overlay_prev_btn.click(function(event){
    this.prev_post();
  }.bind(this));
  


  console.log('savour.component.InstagramDetailPopup: init');
};
goog.inherits(savour.component.InstagramDetailPopup, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.InstagramDetailPopup.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramDetailPopup.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramDetailPopup.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.component.InstagramDetailPopup.prototype.private_method_01 = function() {};
savour.component.InstagramDetailPopup.prototype.private_method_02 = function() {};
savour.component.InstagramDetailPopup.prototype.private_method_03 = function() {};
savour.component.InstagramDetailPopup.prototype.private_method_04 = function() {};
savour.component.InstagramDetailPopup.prototype.private_method_05 = function() {};
savour.component.InstagramDetailPopup.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {Array.<savour.component.InstagramDataItem>} array_param [description]
 */
savour.component.InstagramDetailPopup.prototype.set_data_array = function(array_param) {

  if(goog.isDefAndNotNull(array_param) == true){
    this.data_array = array_param;

  }
};
savour.component.InstagramDetailPopup.prototype.next_post = function() {
  var target_index = this.current_index + 1;
  target_index = target_index > this.data_array.length - 1 ? 0 : target_index;

  this.display_overlay_index(target_index);
};
savour.component.InstagramDetailPopup.prototype.prev_post = function() {
  var target_index = this.current_index - 1;
  target_index = target_index < 0 ? this.data_array.length - 1 : target_index;

  this.display_overlay_index(target_index);
};



/**
 * @param  {Number} number_param
 */
savour.component.InstagramDetailPopup.prototype.display_overlay_index = function(number_param) {
  if (goog.isDefAndNotNull(number_param) == true && goog.isDefAndNotNull(this.data_array[number_param]) == true) {

    this.current_index = number_param;
    this.current_data = this.data_array[this.current_index];

    var target_width = this.current_data.iframe_width;
    var target_height = this.current_data.iframe_height;
    var target_url = this.current_data.iframe_url;


    TweenMax.killTweensOf(this.instagram_iframe_content);
    TweenMax.killTweensOf(this.instagram_iframe_01);
    TweenMax.killTweensOf(this.instagram_iframe_02);
    TweenMax.killTweensOf(this.instagram_white_bg);

    TweenMax.to(this.instagram_iframe_content, 0.5, {width: target_width, height: target_height, ease: Sine.easeInOut, delay: 0.4});
    
    TweenMax.to(this.instagram_iframe_content, 0.5, {marginTop: -1 * target_height / 2, ease: Sine.easeInOut, delay: 0.4});


    TweenMax.to(this.instagram_white_bg, 0.3, {autoAlpha:1});
    TweenMax.to(this.instagram_white_bg, 0.3, {autoAlpha:0, delay: 0.8});


    this.switch_counter++;
    if(this.switch_counter%2 == 0) {
      this.instagram_iframe_02.attr('src', target_url);

      TweenMax.to(this.instagram_iframe_01, 0.5, {autoAlpha:0});
      TweenMax.to(this.instagram_iframe_02, 0.0, {autoAlpha:1, delay: 0.5});

    } else {

      

      this.instagram_iframe_01.attr('src', target_url);

      TweenMax.to(this.instagram_iframe_01, 0.0, {autoAlpha:1, delay: 0.5});
      TweenMax.to(this.instagram_iframe_02, 0.5, {autoAlpha:0});

    }

  }
};



savour.component.InstagramDetailPopup.prototype.open_overlay = function() {
  TweenMax.to(this.element, 0.5, {autoAlpha:1, ease: Circ.easeIn});

};

savour.component.InstagramDetailPopup.prototype.close_overlay = function() {
  TweenMax.to(this.element, 0.5, {autoAlpha:0, ease: Circ.easeIn});

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.component.InstagramDetailPopup.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramDetailPopup.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramDetailPopup.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramDetailPopup.prototype.on_event_handler_04 = function(event) {
};






savour.component.InstagramDetailPopup.prototype.sample_method_calls = function() {

  // sample override
  savour.component.InstagramDetailPopup.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.component.InstagramDetailPopup.EVENT_01));
};