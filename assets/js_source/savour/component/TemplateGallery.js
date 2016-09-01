goog.provide('savour.component.TemplateGallery');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.TemplateGallery = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.TemplateGallery.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, savour.component.TemplateGallery.DEFAULT, options);
  
  this.gallery_array = this.element.find('.page-template-banner-gallery-item');
  this.thumbnail_array = this.element.find('.page-template-banner-thumbnail-item');

  for (var i = 0, l=this.thumbnail_array.length; i < l; i++) {
    item = $(this.thumbnail_array[i]);
    item.data('index', i);
  }

  $(this.thumbnail_array[0]).addClass('selected');

  this.gallery_slick = this.element.find('#page-template-banner-gallery-item-container').slick({
      dots: false,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
  });

  this.gallery_slick.on('afterChange', function(event, slick, current_slide){
    
    //var id = $(current_slide).attr('data-id');
    //var target_thumbnail = this.element.find('.page-template-banner-thumbnail-item[data-id="' + id + '"');

    //this.element.find('.page-template-banner-thumbnail-item').removeClass('selected');
    //target_thumbnail.addClass('selected');
    
    this.element.find('.page-template-banner-thumbnail-item').removeClass('selected');
    $(this.thumbnail_array[current_slide]).addClass('selected');

  }.bind(this));
  
  this.thumbnail_slick = this.element.find('#page-template-banner-thumbnail-item-container').slick({
    dots: false,
    infinite: false,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 6,
  });

  this.element.find('.page-template-banner-thumbnail-item').click(function(event){
    var target = $(event.currentTarget);
    // var id = target.attr('data-id');
    // var target_slide = this.gallery_slick.find('.page-template-banner-gallery-item[data-id="' + id + '"');
    // var index = target_slide

    // console.log('target_slide');
    // console.log(target_slide);
    
    var index = target.data('index');
    this.gallery_slick.slick('slickGoTo', index);
    

  }.bind(this));

  


  console.log('savour.component.TemplateGallery: init');
};
goog.inherits(savour.component.TemplateGallery, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.TemplateGallery.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.TemplateGallery.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.TemplateGallery.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.component.TemplateGallery.prototype.private_method_01 = function() {};
savour.component.TemplateGallery.prototype.private_method_02 = function() {};
savour.component.TemplateGallery.prototype.private_method_03 = function() {};
savour.component.TemplateGallery.prototype.private_method_04 = function() {};
savour.component.TemplateGallery.prototype.private_method_05 = function() {};
savour.component.TemplateGallery.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.TemplateGallery.prototype.public_method_01 = function() {};
savour.component.TemplateGallery.prototype.public_method_02 = function() {};
savour.component.TemplateGallery.prototype.public_method_03 = function() {};
savour.component.TemplateGallery.prototype.public_method_04 = function() {};
savour.component.TemplateGallery.prototype.public_method_05 = function() {};
savour.component.TemplateGallery.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.component.TemplateGallery.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.TemplateGallery.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.TemplateGallery.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.TemplateGallery.prototype.on_event_handler_04 = function(event) {
};






savour.component.TemplateGallery.prototype.sample_method_calls = function() {

  // sample override
  savour.component.TemplateGallery.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.component.TemplateGallery.EVENT_01));
};











